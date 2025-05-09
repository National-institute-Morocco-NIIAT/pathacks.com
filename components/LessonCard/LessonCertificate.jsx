import React, { forwardRef } from 'react';
import { UserInfoDocument } from '../../graphql';
import { useSession } from "next-auth/react";

/**
 * @typedef {Object} CertificateProps
 * @property {string | number | Date} passedAt
 * @property {string} title
 */

/** @type {import('react').ForwardRefExoticComponent<CertificateProps & React.RefAttributes<HTMLDivElement>>} */

const LessonCertificate = forwardRef((props, ref) => {
    const { passedAt, title } = props;

    // getting username
    const { data: session } = useSession();
    const name = JSON.stringify(session?.user.name);

    // getting date
    const date = new Date(passedAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return (
        <div
            id="certificate"
            ref={ref}
            style={{
                backgroundImage: `url("/assets/curriculum/certificateAssets/certificate background.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "1000px",
                height: "700px",
                zIndex: 2000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px"
            }}
        >

            {/* top section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                    paddingTop: "20px",
                    paddingBottom: "20px"

                }}
            >
                {/* left wing */}
                <img
                    src="/assets/curriculum/certificateAssets/left.png"
                    style={{
                        width: "50px",
                        height: "120px"
                    }}
                />

                <h1
                    style={{
                        fontFamily: "maharlika",
                        fontWeight: "lighter",
                        fontSize: "45px",
                        textTransform: "uppercase",
                        width: "50%",
                        textAlign: "center",
                        paddingTop: "20px"
                    }}
                >
                    certificate of completion
                </h1>

                {/* right wing */}
                <img
                    src="/assets/curriculum/certificateAssets/right.png"
                    style={{
                        width: "50px",
                        height: "120px"
                    }}
                />
            </div>

            <h1
                style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    width: "50%",
                    textAlign: "center",
                    paddingBottom: "0px",
                    marginBottom: "0px",
                }}
            >
                this certifies that
            </h1>

            {/* middle section */}
            <div
                style={{
                    width: "75%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >

                {/* left lines image */}
                <img
                    src="/assets/curriculum/certificateAssets/outlines.png"
                    style={{
                        width: "65px",
                        height: "25px"
                    }}
                />

                <div
                    style={{
                        width: "53%",
                        borderBottom: "1px solid #ccc",
                        margin: "0 auto",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "Abhaya Libre",
                            fontSize: "34px",
                            fontWeight: 500,
                            textTransform: "capitalize",
                            width: "100%",
                            textAlign: "center",
                            paddingBottom: "0px",
                            marginBottom: "0px"
                        }}
                    >
                        {name}
                    </h1>
                </div>

                {/* right lines image */}
                <img
                    src="/assets/curriculum/certificateAssets/outlines.png"
                    style={{
                        width: "65px",
                        height: "25px"
                    }}
                />
            </div>

            <div
                style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <p
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16px",
                        textAlign: "justify",
                        fontWeight: "lighter"
                    }}
                >
                    has successfully completed the "<b style={{ fontWeight: "bold" }}>{title}</b>" course on Pathacks.com . In recognition of
                    demonstrating exceptional commitment, skills, and perseverance in mastering the course content,
                    this certificate is awarded on <b style={{ fontWeight: "bold" }}>{day}/{month}/{year}</b>.
                </p>
            </div>

            {/* bottom section */}
            <div
                style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >

                {/* left image */}
                <img
                    src="/assets/curriculum/certificateAssets/pathacks logo.png"
                    style={{
                        width: "150px",
                        height: "170px"
                    }}
                />

                {/* center image */}
                <img
                    src="/assets/curriculum/certificateAssets/ribbon.png"
                    style={{
                        width: "120px",
                        height: "150px",
                        marginRight: "-40px",
                    }}
                />

                {/* right side */}
                <div
                    style={{
                        textAlign: "center",
                        marginRight: "50px",
                        // paddingLeft: "-20px"
                    }}>
                    <div
                        style={{
                            width: "100px",
                            borderBottom: "1px solid #ccc",
                            margin: "0 auto 5px auto",
                            paddingBottom: "4px",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                textTransform: "uppercase",
                                fontSize: "14px",
                                textAlign: "center",
                                display: "block",
                                marginTop: "5px"
                            }}
                        >
                            Program Director
                        </span>
                    </div>
                    <img
                        src="/assets/curriculum/certificateAssets/director sign.png"
                        style={{
                            width: "110px",
                            height: "90px"
                        }}
                    />
                </div>
            </div>
        </div>
    )
})

export default LessonCertificate