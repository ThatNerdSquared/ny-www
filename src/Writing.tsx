import "./widget.css"

function Writing() {
    return (
        <div className="widget info-widget">
            <p className="header-bracket">[</p>
            <h1 className="nobr">writing</h1>
            <p className="header-bracket">]</p>
            <p>
                I'm most well known for my poetry and essays, although I
                write on a variety of topics related to thought and what
                influences the way we think. Topics of interest include
                software as a medium for expression, mental models, thinking
                through writing, the intersection of arts and STEM,
                scientific communication, decentralized networks, and
                polymathy. I am inspired and influenced by the work of minds
                such as{" "}
                <a
                    href="https://thesephist.com"
                    target="_blank"
                >
                    Linus Lee
                </a>{", "}
                <a
                    href="https://calnewport.com"
                    target="_blank"
                >
                    Cal Newport
                </a>{", "}
                <a
                    href="https://rcwaldun.com"
                    target="_blank"
                >
                    Robin Waldun
                </a>{", "}
                <a
                    href="https://nealstephenson.com/"
                    target="_blank"
                >
                    Neal Stephenson
                </a>{", "}
                <a
                    // eslint-disable-next-line max-len
                    href="https://en.wikipedia.org/wiki/Chris_Tse_(Canadian_poet)"
                    target="_blank"
                >
                    Christopher Tse
                </a>{", and "}
                <a
                    href="https://maggieappleton.com"
                    target="_blank"
                >
                    Maggie Appleton
                </a>{"."}
            </p>
        </div>
    )
}

export default Writing
