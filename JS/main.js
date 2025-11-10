// FAQ Accordion

document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.faq-content')

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // icon toggle

        icon.classList.toggle('fa-arrow-down')
        icon.classList.toggle('fa-minus')
        console.log(groupHeader)

        // toggle vidibility of body

        groupBody.classList.toggle('open')
    })
})