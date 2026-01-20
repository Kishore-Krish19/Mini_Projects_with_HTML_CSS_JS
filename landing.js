// Populate footer with current year and social links
const currentYear = new Date().getFullYear();
const linkedInURL = "https://www.linkedin.com/in/Kishore-Krish19";
const githubURL = "https://github.com/Kishore-Krish19/Mini_Projects_with_HTML_CSS_JS";

const footerContent = document.getElementById('footer-content');

footerContent.innerHTML = `
    <small style="font-size:14px;line-height:1.4;">
        &copy; ${currentYear}
        <span class="separator" style="margin:0 12px;color:#9ca3af;font-weight:300;">/</span>
        <i class="fa-solid fa-code"></i> Developed by
        <a href="${linkedInURL}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color:#06b6d4;border-bottom:1px solid transparent;margin-left:6px;margin-right:6px;">Kishore</a>
        <span class="separator" style="margin:0 12px;color:#9ca3af;font-weight:300;">/</span>
        <a href="${githubURL}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color:#06b6d4;border-bottom:1px solid transparent;margin-left:6px;margin-right:6px;">
            <i class="fa-brands fa-github"></i> View Source
        </a>
    </small>
`;
