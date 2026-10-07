// script.js

// Company Registry (Hardcoded for "The Code Method")
let companies = [
    {
        id: 'cozmo',
        name: 'Cozmo Travel',
        brandColor: '0062F0',
        website: 'https://www.cozmotravel.com',
        logoUrl: '',
        logoWidth: 200,
        bannersUrl: 'https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/Cz%201.png,https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/Cz%202.png,https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/Cz%203.png,https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/Cz%204.png',
        officeLocations: [
            "Sharjah HQ, UAE",
            "Dubai, UAE",
            "Abu Dhabi, UAE",
            "Ajman, UAE",
            "Fujairah, UAE",
            "Ras Al Khaimah, UAE",
            "Umm Al Quwain, UAE",
            "Riyadh, KSA",
            "Jeddah, KSA",
            "Dammam, KSA",
            "Mumbai, India",
            "Delhi, India",
            "Ahmedabad, India",
            "Pune, India",
            "Kolkata, India",
            "Chennai, India",
            "Bengaluru, India",
            "Cochin, India",
            "Calicut, India",
            "Trivandrum, India",
            "Manama, Bahrain",
            "Sitra, Bahrain",
            "Kuwait City, Kuwait",
            "Amman, Jordan",
            "Irbid, Jordan",
            "Muscat, Oman",
            "Salalah, Oman",
            "Doha, Qatar",
            "Cairo, Egypt",
            "Casablanca, Morocco"
        ]

    },
    {
        id: 'cozmo_logistics',
        name: 'Cozmo Logistics',
        brandColor: '0062F0',
        website: 'https://cozmologistics.com/',
        logoUrl: '',
        logoWidth: 200,
        bannersUrl: 'https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/CL.png',
        fbUrl: 'https://www.facebook.com/people/Cozmo-Logistics/61565653421850/',
        linkedinUrl: 'https://www.linkedin.com/company/cozmo-logistics/?originalSubdomain=ae',
        igUrl: 'https://www.instagram.com/cozmo.logistics/',
        officeLocations: [
            "HQ Sharjah, UAE",
            "Dubai, UAE",
            "Abu Dhabi, UAE",
            "SHJ Airport Freight Centre, T2, UAE",
            "SHJ Airport Freight Centre, T4, UAE",
            "SHJ Airport Freight Centre, AirArabia Hangar, UAE",
        ]
    },
    {
        id: 'cozmo_hub',
        name: 'Cozmo Hub',
        brandColor: '0062F0',
        website: 'https://hub.cozmotravel.com',
        logoUrl: '',
        logoWidth: 200,
        bannersUrl: 'https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/CH1.png,https://raw.githubusercontent.com/Cozmotravel-coder/email_sign_image/refs/heads/main/CH2.png',
        fbUrl: 'https://www.facebook.com/c',
        linkedinUrl: 'https://www.linkedin.com/company/travtrolley',
        igUrl: 'https://www.instagram.com/travtrolley',
        officeLocations: [
            "Sharjah HQ, UAE",
            "Dubai, UAE",
            "Abu Dhabi, UAE",
            "Ajman, UAE",
            "Fujairah, UAE",
            "Ras Al Khaimah, UAE",
            "Umm Al Quwain, UAE",
            "Riyadh, KSA",
            "Jeddah, KSA",
            "Dammam, KSA",
            "Mumbai, India",
            "Delhi, India",
            "Ahmedabad, India",
            "Pune, India",
            "Kolkata, India",
            "Chennai, India",
            "Bengaluru, India",
            "Cochin, India",
            "Calicut, India",
            "Trivandrum, India",
            "Manama, Bahrain",
            "Sitra, Bahrain",
            "Kuwait City, Kuwait",
            "Amman, Jordan",
            "Irbid, Jordan",
            "Muscat, Oman",
            "Salalah, Oman",
            "Doha, Qatar",
            "Cairo, Egypt"
        ]
    }
];

// Country Social Links (Specific to Cozmo Travel brand)
const countrySocialMapping = {
    "uae": {
        fb: "https://www.facebook.com/CozmoTraveluae/",
        ig: "https://www.instagram.com/cozmotravel/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "oman": {
        fb: "https://www.facebook.com/CozmoTravelOman/",
        ig: "https://www.instagram.com/cozmotraveloman/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "ksa": {
        fb: "https://www.facebook.com/CozmoSaudi/",
        ig: "https://www.instagram.com/cozmotravelksa/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "bahrain": {
        fb: "https://www.facebook.com/cozmotravelbahrain/",
        ig: "https://www.instagram.com/cozmotravelbahrain/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "jordan": {
        fb: "https://www.facebook.com/Cozmo.jotravel/",
        ig: "https://www.instagram.com/cozmotraveljordan/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "india": {
        fb: "https://www.facebook.com/cozmotravelworld/",
        ig: "https://www.instagram.com/cozmotravelindia/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "kuwait": {
        fb: "https://www.facebook.com/cozmotravelkuwait/",
        ig: "https://www.instagram.com/cozmotravelkw/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    },
    "qatar": {
        fb: "https://www.facebook.com/cozmotraveldohaqatar/",
        ig: "https://www.instagram.com/cozmotravelqatar/",
        li: "https://www.linkedin.com/company/cozmo-travel-llc",
        web: "https://www.cozmotravel.com/"
    }
};

// Dynamic Icon Generator
const getIcons = (hexColor) => ({
    phone: `https://img.icons8.com/ios-filled/50/${hexColor}/phone.png`,
    mobile: `https://img.icons8.com/ios-filled/50/${hexColor}/smartphone.png`,
    globe: `https://img.icons8.com/ios-filled/50/${hexColor}/domain--v1.png`,
    pin: `https://img.icons8.com/ios-filled/50/${hexColor}/marker.png`,
    fb: `https://img.icons8.com/ios-filled/50/${hexColor}/facebook-new.png`,
    linkedin: `https://img.icons8.com/ios-filled/50/${hexColor}/linkedin.png`,
    insta: `https://img.icons8.com/ios-filled/50/${hexColor}/instagram-new.png`
});

// App State
let activeCompany = companies[0];
let bannerOptions = [];
let selectedBannerBase64 = "";
let selectedBannerLink = "";
let isAdmin = false;

function normalizeCompany(company) {
    if (!company) return null;

    company.officeLocations = Array.isArray(company.officeLocations) ? company.officeLocations : [];
    company.bannersUrl = company.bannersUrl ?? "";
    company.brandColor = company.brandColor ?? '0062F0';
    company.website = company.website ?? '';
    company.logoUrl = company.logoUrl ?? '';
    company.logoWidth = company.logoWidth ?? 200;
    company.fbUrl = company.fbUrl ?? '';
    company.linkedinUrl = company.linkedinUrl ?? '';
    company.igUrl = company.igUrl ?? '';
    company.isHidden = Boolean(company.isHidden);

    return company;
}

// DOM Elements
const els = {
    // Admin toggles
    lockBtn: document.getElementById('admin-lock-btn'),
    adminModal: document.getElementById('admin-modal'),
    adminPassword: document.getElementById('admin-password'),
    adminError: document.getElementById('admin-error'),
    adminLoginBtn: document.getElementById('admin-login'),
    adminCancelBtn: document.getElementById('admin-cancel'),
    adminSection: document.getElementById('admin-section'),

    // Inputs (Admin)
    brandNameInp: document.getElementById('admin-brand-name'),
    colorInp: document.getElementById('admin-color'),
    websiteInp: document.getElementById('admin-website'),
    logoUrlInp: document.getElementById('admin-logo-url'),
    logoWidthInp: document.getElementById('admin-logo-width'),
    lblLogoSize: document.getElementById('lbl-logo-size'),
    btnClearLogo: document.getElementById('btn-clear-logo'),
    btnHideBrand: document.getElementById('btn-hide-brand'),
    btnDeleteBrand: document.getElementById('btn-delete-brand'),
    bannersInp: document.getElementById('admin-banners'),
    fbUrlInp: document.getElementById('admin-fb'),
    linkedinUrlInp: document.getElementById('admin-linkedin'),
    igUrlInp: document.getElementById('admin-ig'),
    btnExportCode: document.getElementById('btn-export-code'),

    // Admin Office Manager
    adminOfficeList: document.getElementById('admin-office-list'),
    adminNewOffice: document.getElementById('admin-new-office'),
    btnAddOffice: document.getElementById('btn-add-office'),

    // Inputs (Client)
    brandButtonsContainer: document.getElementById('brand-buttons-container'),
    nameInp: document.getElementById('inp-name'),
    titleInp: document.getElementById('inp-title'),
    telInp: document.getElementById('inp-tel'),
    cellInp: document.getElementById('inp-cell'),

    officeSelect: document.getElementById('inp-office'),
    bannerGrid: document.getElementById('banner-grid'),

    // Preview & Actions
    livePreview: document.getElementById('live-preview-container'),
    finalPreview: document.getElementById('final-preview-container'),
    btnGenerate: document.getElementById('btn-generate'),
    btnBack: document.getElementById('btn-back'),
    btnCopy: document.getElementById('btn-copy'),
    statusMsg: document.getElementById('status-msg'),
    copyFeedback: document.getElementById('copy-feedback'),

    // Pages
    page1: document.getElementById('page-1'),
    page2: document.getElementById('page-2')
};

function renderCompanyButtons() {
    els.brandButtonsContainer.innerHTML = '';

    companies.forEach((comp) => {
        const safeComp = normalizeCompany(comp);
        if (!safeComp) return;
        if (!isAdmin && safeComp.isHidden) return; // Hide from public

        const isActive = activeCompany && activeCompany.id === safeComp.id;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `brand-btn ${isActive ? 'active' : ''}`;
        btn.innerText = safeComp.name + (isAdmin && safeComp.isHidden ? ' (Hidden)' : '');

        // Dynamic active color 
        if (isActive) {
            btn.style.backgroundColor = '#' + safeComp.brandColor.replace('#', '');
            btn.style.borderColor = '#' + safeComp.brandColor.replace('#', '');
            btn.style.color = 'white';
        } else {
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
            btn.style.color = '';
        }

        btn.onclick = () => selectCompany(comp.id);
        els.brandButtonsContainer.appendChild(btn);
    });

    // Add Brand Button (Admin Only)
    if (isAdmin) {
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = `brand-btn add-btn`;
        addBtn.innerHTML = `+ Add Brand`;
        addBtn.onclick = () => {
            const id = 'brand_' + Date.now();
            const newComp = {
                id: id,
                name: 'New Custom Brand',
                brandColor: '0062F0',
                website: 'https://',
                logoUrl: 'https://placehold.co/200x50/0062F0/white?text=New+Brand',
                bannersUrl: 'https://placehold.co/560x100/0062F0/white?text=New+Banner',
                fbUrl: '',
                linkedinUrl: '',
                igUrl: '',
                officeLocations: ["Example Address: 123 Street"]
            };
            companies.push(newComp);
            selectCompany(id);
        };
        els.brandButtonsContainer.appendChild(addBtn);
    }
}

function selectCompany(id) {
    const nextCompany = normalizeCompany(companies.find(c => c.id === id) || companies[0]);
    if (!nextCompany) return;

    activeCompany = nextCompany;
    renderCompanyButtons();

    // Update admin fields to reflect new company defaults
    els.brandNameInp.value = activeCompany.name;
    els.colorInp.value = activeCompany.brandColor;
    els.websiteInp.value = activeCompany.website;
    els.logoUrlInp.value = activeCompany.logoUrl;
    els.logoWidthInp.value = activeCompany.logoWidth || 200;
    els.lblLogoSize.innerText = activeCompany.logoWidth || 200;
    els.bannersInp.value = activeCompany.bannersUrl;

    els.btnDeleteBrand.style.display = 'block';
    if (activeCompany.isHidden) {
        els.btnHideBrand.innerText = 'Show Brand';
    } else {
        els.btnHideBrand.innerText = 'Hide Brand';
    }

    els.fbUrlInp.value = activeCompany.fbUrl;
    els.linkedinUrlInp.value = activeCompany.linkedinUrl;
    els.igUrlInp.value = activeCompany.igUrl;

    // Refresh unique office list for this active company
    populateOfficeSelect();
    renderAdminOfficeList();

    initImages();
}

// Logic to populate standard select options exclusively for the active company
function populateOfficeSelect() {
    const list = els.officeSelect;
    if (!list || !activeCompany) return;

    if (!Array.isArray(activeCompany.officeLocations)) {
        activeCompany.officeLocations = [];
    }

    list.innerHTML = '';
    let valid = false;
    activeCompany.officeLocations.forEach((loc) => {
        const opt = document.createElement('option');
        opt.value = loc;
        // Split on colon for a shorter display name if possible
        const split = String(loc).split(':');
        opt.innerText = split[0].trim();
        list.appendChild(opt);
        if (list.value === loc) valid = true;
    });
    if (!valid && activeCompany.officeLocations.length > 0) {
        list.value = activeCompany.officeLocations[0];
    } else if (activeCompany.officeLocations.length === 0) {
        list.value = '';
    }
}

// Logic for Admin Office Manager exclusively for the active company
function renderAdminOfficeList() {
    if (!els.adminOfficeList || !activeCompany) return;
    activeCompany.officeLocations = Array.isArray(activeCompany.officeLocations) ? activeCompany.officeLocations : [];
    els.adminOfficeList.innerHTML = '';
    activeCompany.officeLocations.forEach((loc, index) => {
        const item = document.createElement('div');
        item.className = 'office-item';

        const text = document.createElement('div');
        text.className = 'office-text';
        text.innerText = loc;
        text.title = loc;

        const rmBtn = document.createElement('button');
        rmBtn.className = 'remove-office-btn';
        rmBtn.innerHTML = '&times;';
        rmBtn.title = 'Remove Office';
        rmBtn.onclick = () => {
            // Modify activeCompany's unique list
            activeCompany.officeLocations.splice(index, 1);
            renderAdminOfficeList();
            populateOfficeSelect();
            updatePreview();
        };

        item.appendChild(text);
        item.appendChild(rmBtn);
        els.adminOfficeList.appendChild(item);
    });
}

els.btnAddOffice.onclick = () => {
    const val = els.adminNewOffice.value.trim();
    if (val) {
        // Add strictly to activeCompany's list
        activeCompany.officeLocations.push(val);
        els.adminNewOffice.value = '';
        renderAdminOfficeList();
        populateOfficeSelect();
        updatePreview();
    }
};

// Utils: Return direct image URLs to avoid Email Attachment issues with Base64
async function fetchImageAsBase64(url) {
    return url;
}

function parseBannerEntries(rawValue) {
    const rawBanners = rawValue
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean);

    return rawBanners.map((entry) => {
        const [imageUrl, ...linkParts] = entry.split('|');
        const image = imageUrl.trim();
        const linkUrl = linkParts.join('|').trim();

        return {
            url: image,
            linkUrl: linkUrl || '',
            base64: image
        };
    });
}

// Logic: Initialize App Data for Active Company
async function initImages() {
    els.btnGenerate.disabled = true;
    els.statusMsg.innerText = "Loading company assets...";
    els.statusMsg.classList.remove('hidden');

    try {
        const rawBanners = parseBannerEntries(activeCompany.bannersUrl || "");
        els.bannerGrid.innerHTML = "";
        bannerOptions = [];

        for (let i = 0; i < rawBanners.length; i++) {
            const bannerEntry = rawBanners[i];
            const base64 = await fetchImageAsBase64(bannerEntry.url);
            const linkUrl = bannerEntry.linkUrl || activeCompany.website || "";
            bannerOptions.push({ url: bannerEntry.url, linkUrl: linkUrl, base64: base64 });

            const thumb = document.createElement('div');
            thumb.className = `banner-item ${i === 0 ? 'selected' : ''}`;
            thumb.innerHTML = `<img src="${base64}" alt="Banner ${i + 1}">`;
            thumb.onclick = () => selectBanner(i);
            els.bannerGrid.appendChild(thumb);

            if (i === 0) {
                selectedBannerBase64 = base64;
                selectedBannerLink = linkUrl;
            }
        }

        // If no banners
        if (rawBanners.length === 0) {
            selectedBannerBase64 = "";
            selectedBannerLink = activeCompany.website || "";
            els.bannerGrid.innerHTML = '<div class="banner-placeholder">No banners added</div>';
        }

        els.statusMsg.innerText = "Ready!";
        setTimeout(() => els.statusMsg.classList.add('hidden'), 2000);
        els.btnGenerate.disabled = false;

        updatePreview();

    } catch (error) {
        els.statusMsg.innerText = "Failed to load images. Please check your URLs or connection.";
        console.error(error);
    }
}

function selectBanner(index) {
    document.querySelectorAll('.banner-item').forEach((el, i) => {
        el.classList.toggle('selected', i === index);
    });
    if (bannerOptions[index]) {
        selectedBannerBase64 = bannerOptions[index].base64;
        selectedBannerLink = bannerOptions[index].linkUrl || activeCompany.website || "";
    }
    updatePreview();
}

// Logic: Admin Lock/Unlock
els.lockBtn.onclick = () => {
    if (isAdmin) {
        // Lock it
        isAdmin = false;
        els.lockBtn.classList.replace('unlocked', 'locked');
        els.lockBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        `;
        els.adminSection.classList.add('hidden');
        renderCompanyButtons(); // Hide Add Brand button
    } else {
        // Ask for password
        els.adminPassword.value = "";
        els.adminError.classList.add('hidden');
        els.adminModal.classList.remove('hidden');
    }
};

els.adminCancelBtn.onclick = () => {
    els.adminModal.classList.add('hidden');
};

function handleAdminLogin() {
    if (els.adminPassword.value === "cozmo2024") {
        isAdmin = true;
        els.adminModal.classList.add('hidden');
        els.lockBtn.classList.replace('locked', 'unlocked');
        els.lockBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0"></path>
            </svg>
        `;
        els.adminSection.classList.remove('hidden');
        renderCompanyButtons(); // Show Add Brand button
    } else {
        els.adminError.classList.remove('hidden');
    }
}

els.adminLoginBtn.onclick = handleAdminLogin;
els.adminPassword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleAdminLogin();
    }
});

// Signature Template Generation Logic
function renderSignatureHTML() {
    const data = {
        name: els.nameInp.value.trim(),
        title: els.titleInp.value.trim(),
        tel: els.telInp.value.trim(),
        cell: els.cellInp.value.trim(),

        office: els.officeSelect.value || ""
    };

    const fontPrimary = "Arial, sans-serif";
    const fontSecondary = "Arial, sans-serif";
    const fontTitle = "Georgia, serif";
    const brandColor = "#" + activeCompany.brandColor.replace('#', ''); // ensure hash

    const icons = getIcons(activeCompany.brandColor.replace('#', ''));

    let logoImg = activeCompany.logoUrl;

    const bannerImg = selectedBannerBase64;
    const selectedBanner = bannerOptions.find((item) => item.base64 === selectedBannerBase64) || bannerOptions[0] || null;
    const bannerLink = selectedBanner?.linkUrl || activeCompany.website || "";

    // Determine Country-Specific Social Links if applicable
    let fbUrl = activeCompany.fbUrl;
    let linkedinUrl = activeCompany.linkedinUrl;
    let igUrl = activeCompany.igUrl;
    let siteUrl = activeCompany.website;

    if (activeCompany.id === 'cozmo' && data.office) {
        const parts = data.office.split(',');
        const country = parts[parts.length - 1]?.trim().toLowerCase();

        if (country && countrySocialMapping[country]) {
            fbUrl = countrySocialMapping[country].fb;
            igUrl = countrySocialMapping[country].ig;
            linkedinUrl = countrySocialMapping[country].li;
            siteUrl = countrySocialMapping[country].web;
        }
    }

    // Adjust padding for banner
    const bannerStyle = logoImg ? "padding-top:8px;" : "padding-top:12px;";

    const bannerHtml = bannerImg ? `
    <tr>
        <td style="${bannerStyle}">
            <a href="${bannerLink || siteUrl}">
                <img src="${bannerImg}" width="560" style="display:block; width:560px; max-width:100%; border:none;" alt="Banner">
            </a>
        </td>
    </tr>` : '';

    const nameHtml = data.name ? `<div style="font-family:${fontPrimary}; font-size:20px; font-weight:700; letter-spacing:-0.02em; color:#102a56; margin-bottom:0px;">${escapeHtml(data.name)}</div>` : '';
    const titleHtml = data.title ? `<div style="font-family:${fontTitle}; font-size:16px; font-weight:500; text-transform:none; color:#102a56;">${escapeHtml(data.title)}</div>` : '';

    const activeItems = [];
    if (data.tel) {
        activeItems.push(`
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td width="20" valign="top" style="padding-top:2px;">
                                    <img src="${icons.phone}" width="14" height="14" style="display:block;" alt="T">
                                </td>
                                <td valign="top" style="font-size:14px; color:#102a56; line-height:1.4;">
                                    ${escapeHtml(data.tel)}
                                </td>
                            </tr>
                        </table>`);
    }

    if (data.cell) {
        activeItems.push(`
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td width="20" valign="top" style="padding-top:0px;">
                                    <img src="${icons.mobile}" width="14" height="14" style="display:block;" alt="C">
                                </td>
                                <td valign="top" style="font-size:14px; color:#102a56;">
                                    ${escapeHtml(data.cell)}
                                </td>
                            </tr>
                        </table>`);
    }

    if (data.office) {
        activeItems.push(`
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td width="20" valign="top" style="padding-top:2px;">
                                    <img src="${icons.pin}" width="14" height="14" style="display:block;" alt="A">
                                </td>
                                <td valign="top" style="font-size:14px; line-height:1.4; color:#102a56;">
                                    ${escapeHtml(data.office)}
                                </td>
                            </tr>
                        </table>`);
    }

    const webHtml = siteUrl ? `<td style="padding-right:12px;"><a href="${siteUrl}"><img src="${icons.globe}" width="14" height="14" style="display:block; border:none;" alt="Web"></a></td>` : '';
    const fbHtml = fbUrl ? `<td style="padding-right:12px;"><a href="${fbUrl}"><img src="${icons.fb}" width="14" height="14" style="display:block; border:none;" alt="FB"></a></td>` : '';
    const inHtml = linkedinUrl ? `<td style="padding-right:12px;"><a href="${linkedinUrl}"><img src="${icons.linkedin}" width="14" height="14" style="display:block; border:none;" alt="IN"></a></td>` : '';
    const igHtml = igUrl ? `<td><a href="${igUrl}"><img src="${icons.insta}" width="14" height="14" style="display:block; border:none;" alt="IG"></a></td>` : '';

    if (webHtml || fbHtml || inHtml || igHtml) {
        activeItems.push(`
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                ${webHtml}${fbHtml}${inHtml}${igHtml}
                            </tr>
                        </table>`);
    }

    const hasSocial = (webHtml || fbHtml || inHtml || igHtml);

    let leftColHtml = '';
    let rightColHtml = '';
    const spacer = `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr><td height="6" style="font-size:1px; line-height:1px;">&nbsp;</td></tr>
                        </table>`;

    if (activeItems.length > 0) {
        if (!data.tel && !data.cell) {
            if (activeItems.length === 2) {
                leftColHtml = activeItems[0];
                rightColHtml = activeItems[1];
            } else if (activeItems.length === 1) {
                if (hasSocial) {
                    rightColHtml = activeItems[0];
                } else {
                    leftColHtml = activeItems[0];
                }
            }
        } else {
            if (activeItems.length === 1) {
                leftColHtml = activeItems[0];
            } else if (activeItems.length === 2) {
                leftColHtml = activeItems[0] + spacer + activeItems[1];
            } else if (activeItems.length === 3) {
                leftColHtml = activeItems[0] + spacer + activeItems[1] + spacer + activeItems[2];
            } else if (activeItems.length >= 4) {
                leftColHtml = activeItems[0] + spacer + activeItems[1];
                rightColHtml = activeItems[2] + spacer + activeItems[3];
            }
        }
    }

    const detailsRowHtml = (activeItems.length > 0) ? `
    <tr>
        <td style="padding-bottom:8px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td width="200" valign="top">
                        ${leftColHtml}
                    </td>
                    ${rightColHtml ? `<td width="15"></td>
                    <td width="345" valign="top">
                        ${rightColHtml}
                    </td>` : ''}
                </tr>
            </table>
        </td>
    </tr>` : '';

    const personalInfoHtml = (nameHtml || titleHtml) ? `
    <tr>
        <td style="padding-bottom:6px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td>
                        ${nameHtml}
                        ${titleHtml}
                    </td>
                </tr>
            </table>
        </td>
    </tr>` : '';

    return `
<table border="0" cellpadding="0" cellspacing="0" width="560" style="width:560px; font-family:${fontSecondary}; text-align:left; line-height:1.2; font-size:14px; color:#102a56; background:#ffffff;">
    ${personalInfoHtml}
    ${detailsRowHtml}
    ${logoImg ? `
    <tr>
        <td style="padding-bottom:8px; padding-top:12px;">
            <a href="${siteUrl}">
                <img src="${logoImg}" style="display:block; width:${activeCompany.logoWidth || 200}px; max-width:100%; height:auto;" alt="${activeCompany.name}">
            </a>
        </td>
    </tr>` : ''}${bannerHtml}
</table>
    `;
}

function updatePreview() {
    const html = renderSignatureHTML();
    els.livePreview.innerHTML = html;
}

function escapeHtml(unsafe) {
    if (!unsafe) return "";
    return String(unsafe)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Live Updates Listeners
[els.nameInp, els.titleInp, els.telInp, els.cellInp, els.officeSelect].forEach(inp => {
    inp.addEventListener('input', updatePreview);
    inp.addEventListener('change', updatePreview);
});

// Admin Action: Clear Logo
els.btnClearLogo.onclick = () => {
    els.logoUrlInp.value = "";
    activeCompany.logoUrl = "";
    updatePreview();
};

// Admin Action: Hide Brand
els.btnHideBrand.onclick = () => {
    activeCompany.isHidden = !activeCompany.isHidden;
    selectCompany(activeCompany.id);
    renderCompanyButtons();
};

// Admin Action: Delete Brand
els.btnDeleteBrand.onclick = () => {
    if (confirm(`Are you sure you want to delete "${activeCompany.name}"?`)) {
        if (companies.length === 1) {
            alert("Cannot delete the last remaining brand.");
            return;
        }
        companies = companies.filter(c => c.id !== activeCompany.id);
        selectCompany(companies[0].id); // fall back to first
    }
};

// Admin Action: Export Code
if (els.btnExportCode) {
    els.btnExportCode.onclick = () => {
        const codeOutput = `// script.js\n\n// Company Registry (Hardcoded for "The Code Method")\nlet companies = ${JSON.stringify(companies, null, 4)};`;

        // Bulletproof copy for both HTTP and local file:// contexts
        const textArea = document.createElement("textarea");
        textArea.value = codeOutput;
        // Move element out of view
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            alert("Copied successfully! Now open 'script.js' in your code editor and replace everything from line 1 up to (and including) the `let companies = [...];` block with the copied text.");
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert("Failed to copy code automatically. Check console for the code output.");
        }

        document.body.removeChild(textArea);
    };
}

// Admin input listeners
[els.brandNameInp, els.colorInp, els.websiteInp, els.logoUrlInp, els.bannersInp, els.fbUrlInp, els.linkedinUrlInp, els.igUrlInp, els.logoWidthInp].forEach(inp => {
    inp.addEventListener('input', () => {
        if (inp.id === 'admin-brand-name') activeCompany.name = inp.value;
        if (inp.id === 'admin-color') activeCompany.brandColor = inp.value;
        if (inp.id === 'admin-website') activeCompany.website = inp.value;
        if (inp.id === 'admin-fb') activeCompany.fbUrl = inp.value;
        if (inp.id === 'admin-linkedin') activeCompany.linkedinUrl = inp.value;
        if (inp.id === 'admin-ig') activeCompany.igUrl = inp.value;
        if (inp.id === 'admin-logo-url') activeCompany.logoUrl = inp.value;

        if (inp.id === 'admin-logo-width') {
            activeCompany.logoWidth = inp.value;
            els.lblLogoSize.innerText = inp.value;
        }

        if (inp.id === 'admin-color' || inp.id === 'admin-brand-name') renderCompanyButtons();

        updatePreview();
    });
});

els.bannersInp.addEventListener('change', () => {
    activeCompany.bannersUrl = els.bannersInp.value;
    initImages();
});

// Page Navigation & Copy
els.btnGenerate.onclick = () => {
    els.finalPreview.innerHTML = renderSignatureHTML();
    els.page1.classList.remove('active');
    els.page1.classList.add('hidden');

    els.page2.classList.remove('hidden');
    els.page2.classList.add('active');
};

els.btnBack.onclick = () => {
    els.page2.classList.remove('active');
    els.page2.classList.add('hidden');

    els.page1.classList.remove('hidden');
    els.page1.classList.add('active');
};

els.btnCopy.onclick = () => {
    const html = els.finalPreview.innerHTML;

    if (navigator.clipboard && window.ClipboardItem) {
        const typeHtml = "text/html";
        const typePlain = "text/plain";
        const blobHtml = new Blob([html], { type: typeHtml });
        const blobPlain = new Blob([els.finalPreview.innerText], { type: typePlain });

        navigator.clipboard.write([
            new ClipboardItem({
                [typeHtml]: blobHtml,
                [typePlain]: blobPlain
            })
        ]).then(() => {
            showToast();
        }).catch(err => {
            console.error("Failed to copy", err);
            legacyCopy(els.finalPreview);
        });
    } else {
        legacyCopy(els.finalPreview);
    }
};

function legacyCopy(element) {
    const range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        showToast();
    } catch (err) {
        console.error('Legacy copy failed', err);
        alert('Failed to copy to clipboard.');
    }
    window.getSelection().removeAllRanges();
}

function showToast() {
    els.copyFeedback.classList.remove('hidden');
    setTimeout(() => {
        els.copyFeedback.classList.add('hidden');
    }, 2500);
}

// Init app
window.onload = () => {
    selectCompany(companies[0].id);
};
