function ParseParagraph(paragraph) {
    if (!paragraph) return null;
    // Regular expression to find the markdown-style links in the paragraph
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const italicRegex = /\*(.*?)\*/g; // Regular expression to find text surrounded by asterisks

    var linkText = "";
    var linkUrl = "";

    return paragraph.split(linkRegex).map((part, index) => {
        if (index % 3 === 0) {
            // Check for italicized text
            return part.split(italicRegex).map((text, i) => {
                if (i % 2 === 0) {
                    return text;
                } else {
                    return <em key={i}>{text}</em>;
                }
            });
        } else if (index % 3 === 1) {
            linkText = part;
        } else if (index % 3 === 2) {
            linkUrl = part;
            return (
                <a
                    key={index}
                    href={linkUrl}
                    className="text-gray-300 underline hover:text-blue-300 cursor-pointer"
                >
                    {linkText}
                </a>
            );
        } else {
            return null;
        }
    });
}

export default ParseParagraph;