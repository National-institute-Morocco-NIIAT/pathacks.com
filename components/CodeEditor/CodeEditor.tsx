// components/CodeEditor.tsx
import dynamic from 'next/dynamic';
import { useState } from 'react';

//import { createSubmission as createCodeSubmission, getSubmission } from '../../lib/judge0';
//import { createSubmission } from '../../helpers/updateSubmission';
import { useCreateSubmissionMutation } from '../../graphql';
//import AlertsDisplay from '../AlertsDisplay';
import LoadingSpinnerInline from '../LoadingSpinnerInline';

// Lazy-load MonacoEditor to prevent SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

type CreateSubmission = {
    challengeId: number,
    lessonId: number
}

// Define supported languages
// const languageOptions = [
//     { id: 'javascript', label: 'JavaScript' },
//     { id: 'typescript', label: 'TypeScript' },
//     { id: 'python', label: 'Python' },
//     { id: 'cpp', label: 'C++' },
//     { id: 'java', label: 'Java' },
//     { id: 'markdown', label: 'Markdown' },
//     { id: 'html', label: 'HTML' },
//     { id: 'css', label: 'CSS' },
// ];

const languageOptions = [
    { monaco: 'javascript', label: 'JavaScript', judge0: 63 },
    { monaco: 'typescript', label: 'TypeScript', judge0: 74 },
    { monaco: 'python', label: 'Python (3.8.1)', judge0: 71 },
    { monaco: 'cpp', label: 'C++ (GCC 7.4.0)', judge0: 54 },
    { monaco: 'c', label: 'C (GCC 7.4.0)', judge0: 50 },
    { monaco: 'java', label: 'Java (OpenJDK 13.0.1)', judge0: 62 },
    { monaco: 'php', label: 'PHP (7.4.1)', judge0: 68 },
    { monaco: 'ruby', label: 'Ruby (2.7.0)', judge0: 72 },
    { monaco: 'go', label: 'Go (1.13.5)', judge0: 60 },
    { monaco: 'csharp', label: 'C# (Mono 6.6.0.161)', judge0: 51 },
    { monaco: 'swift', label: 'Swift (5.2.3)', judge0: 83 },
    { monaco: 'kotlin', label: 'Kotlin (1.3.70)', judge0: 78 },
    //{ monaco: 'rust', label: 'Rust (1.40.0)', judge0: 73 },
    //{ monaco: 'scala', label: 'Scala (2.13.2)', judge0: 81 },
    //{ monaco: 'perl', label: 'Perl (5.28.1)', judge0: 69 },
    //{ monaco: 'lua', label: 'Lua (5.3.5)', judge0: 64 },
    //{ monaco: 'r', label: 'R (4.0.0)', judge0: 76 },
    //{ monaco: 'sql', label: 'SQL (SQLite 3.27.2)', judge0: 82 },
    //{ monaco: 'bash', label: 'Bash (5.0.0)', judge0: 46 },
    //{ monaco: 'plaintext', label: 'Plain Text', judge0: 43 },
];


// Define component props
interface CodeEditorProps {
    value: string;
    onChange: (value: string | undefined) => void;
    language?: string;
    onLanguageChange?: (lang: string) => void;
    showLanguageSelector?: boolean;
    submission?: CreateSubmission
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    value,
    onChange,
    language = 'javascript',
    onLanguageChange,
    showLanguageSelector = true,
    submission
}) => {
    const [internalLanguage, setInternalLanguage] = useState(language);
    const [judge0LangId, setLangId] = useState(63);

    //const [alerts, setAlerts] = useState<any[]>([])

    const [result, setResult] = useState(null);
    const [output, setOutput] = useState(null);

    const [isRunning, setRunning] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        const selectedLanguage = languageOptions.find(item => item.monaco == newLang);
        setLangId(selectedLanguage?.judge0 ?? 63);

        setInternalLanguage(newLang);
        onLanguageChange && onLanguageChange(newLang);
    };

    const [createSubmission] = useCreateSubmissionMutation();
    //const [alertId, setAlertId] = useState(1);

    const handleRun = async () => {
        //const token = await createCodeSubmission(value, judge0LangId);
        const res = await fetch('/api/judge0/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sourceCode: value, languageId: judge0LangId }),
        });
        const { token } = await res.json();

        setOutput(null);
        setRunning(true);
        pollSubmission(token);
    };

    async function getSubmissionOutput(token: string) {
        //const data = await getSubmission(token);

        const resultRes = await fetch(`/api/judge0/result?token=${token}`);
        const data = await resultRes.json();


        console.log('Submission Result:', data);

        // Extract output (stdout) or error (stderr/compile_output)
        if (data.stdout) {
            setResult(data);
            return data.stdout;
        } else if (data.stderr) {
            console.log('Error:', data.stderr);
            return data.stderr;
        } else if (data.compile_output) {
            console.log('Compilation Error:', data.compile_output);
            return data.compile_output;
        } else {
            console.log('No output yet');
            return null;
        }
    }

    async function pollSubmission(token: string) {

        while (output === null) {
            let finalOutput = await getSubmissionOutput(token);
            if (finalOutput) {
                setOutput(finalOutput);
                setRunning(false);
                console.log('Final Output:', result);
                //document.getElementById('output').textContent = result;
                break;
            }
            console.log('Waiting for result...');
            await new Promise((res) => setTimeout(res, 2000)); // Wait 2 sec
        }
    }

    const handleSubmit = async () => {
        try {
            setSubmitting(true)
            await createSubmission({
                variables: {
                    lessonId: submission?.lessonId ?? 1,
                    challengeId: submission?.challengeId ?? 1,
                    diff: value
                }
            });
            await new Promise((res) => setTimeout(res, 1000)); // Wait 2 sec

            location.reload();

        } catch (error) {
            setSubmitting(false)
            console.log(33333, error)
        }
    }

    return (
        <div className='mb-5'>
            {/* {alerts && <AlertsDisplay alerts={alerts as any} />} */}
            {showLanguageSelector && (
                <div className='d-flex justify-content-between' style={{ marginBottom: '10px' }}>
                    <div>
                        <label>Select Language: </label>
                        <select value={internalLanguage} onChange={handleLanguageChange}>
                            {languageOptions.map((lang) => (
                                <option key={lang.monaco} value={lang.monaco}>
                                    {lang.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='d-flex'>
                        {isSubmitting && <LoadingSpinnerInline />}
                        <button className='btn btn-primary ms-2' onClick={handleSubmit}>Submit</button>
                        {/* <button className='btn btn-success ms-1'>Submissions</button> */}
                    </div>
                </div>
            )}

            <div style={{ height: '180px' }}>
                <MonacoEditor
                    height="100%"
                    language={internalLanguage}
                    theme="vs-dark"
                    value={value}
                    onChange={onChange}
                />
            </div>

            <div>
                <button onClick={handleRun}>Run Code</button>
                <div className='mt-1 mb-5'>
                    <div className='text-end'>Output {isRunning && <LoadingSpinnerInline />}</div>
                    {(output && !isRunning) && <div className='p-2 bg-light border'>
                        <pre>{output}</pre>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
