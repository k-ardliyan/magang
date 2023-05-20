import { icTechs, dataModals } from './data.js';

const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

const icTechsContainer = document.querySelector('#logo-tech');

icTechs.forEach((icTech) => {
    const icTechElement = document.createElement('img');
    icTechElement.setAttribute('src', icTech.url);
    icTechElement.setAttribute('alt', icTech.alt);
    icTechElement.setAttribute('class', 'me-3 my-2');
    icTechElement.setAttribute('data-bs-toggle', 'tooltip');
    icTechElement.setAttribute('data-bs-placement', 'bottom');
    icTechElement.setAttribute('title', icTech.title);
    icTechsContainer.appendChild(icTechElement);
});

const icTechsTooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]');
icTechsTooltip.forEach((icTechTooltip) => {
    new bootstrap.Tooltip(icTechTooltip);
});

const dataModalsContainer = document.querySelector('#data-modals');

dataModals.forEach((dataModal) => {
    const dataModalElement = document.createElement('div');
    dataModalElement.setAttribute('class', 'modal fade');
    dataModalElement.setAttribute('id', dataModal.alt + 'modal');
    dataModalElement.setAttribute('tabindex', '-1');
    dataModalElement.setAttribute('aria-labelledby', dataModal.alt);
    dataModalElement.setAttribute('aria-hidden', 'true');
    dataModalElement.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark">
                <a href="${dataModal.link}" target="${dataModal.target}" rel="${dataModal.rel}">
                    <div class="content">
                        <img src="${dataModal.url}" alt class="image-content">
                        <div class="overlay-content"><i class="gg-eye my-2 mx-auto"></i>${dataModal.content}</div>
                    </div>
                </a>
            </div>
        </div>
    `;
    dataModalsContainer.appendChild(dataModalElement);
});

const dataModalsContent = document.querySelectorAll('.modal');
dataModalsContent.forEach((dataModalContent) => {
    new bootstrap.Modal(dataModalContent);
});
