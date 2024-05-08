let burger = document.querySelector('.header__burger'),
    burgerContent = document.querySelector('.header__burger-content'),
    radio = document.querySelectorAll('.radio__button'),
    label = document.querySelectorAll('.radio__label');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerContent.classList.toggle('active')
    document.body.classList.toggle('overflow-hidden')
})

radio.forEach(function(item) {
    if (radio.checked) {
        console.log('a nice man')
    }
})


// const tabs = document.querySelectorAll('.catalog__ul a'),
//       products = document.querySelectorAll('.сatalog__row');

// Проходим по всей ссылкам
// tabs.forEach((tab, idx) => {
//     tab.addEventListener('click', (e) => {
//         e.preventDefault()


//         let anchor = tab.getAttribute('href').replace('#', '')
//         console.log(tab)
//         let id = tab.map(i => {
//             id.setAttribute('data-item', i)
//         })
//         console.log(id)
//         products.forEach(product => {
//             product.classList.add('catalog__row_hidden')
//         })
//         console.log(idx)
//         if (products[idx].id === anchor) {
//             products[idx].classList.remove('catalog__row_hidden')
//         }
//     })
// })

const tabsBtn = document.querySelectorAll('.tabs__nav-btn'),
      ul = document.querySelector('.catalog__ul'),
      catalogContent = document.querySelectorAll('.сatalog__row');

for (let key in tabsBtn) {
    if (!tabsBtn.hasOwnProperty(key)) continue;

    let newKey = parseInt(key)
    newKey++
    // Ключ изначально был в формате "string", но мы трансформировали его в тип данных чисел
    // также сделав так, что бы отсчет начинался не с 0, а с 1

    let obj = tabsBtn[key]
    // Ссылка в которую надо поместить атрибут "data-num"
    obj.setAttribute('data-num', newKey)
}
for (let key in catalogContent) {
    if (!catalogContent.hasOwnProperty(key)) continue;

    let newKey = parseInt(key)
    newKey++
    // Ключ изначально был в формате "string", но мы трансформировали его в тип данных чисел
    // также сделав так, что бы отсчет начинался не с 0, а с 1

    let content = catalogContent[key]
    // Контент в который надо будет поместить "id"
    content.setAttribute('id', `tab${newKey}`)
    if (content.id === 'tab1') {
        content.classList.add('active')
    } else {
        content.classList.add('hidden')
        content.classList.remove('active')
    }
    // Используем логический оператор для того, что бы сделать условие, при котором
    // первый "content" был активным
}
// let deleteUselessContent = () => {
//     tabsBtn.forEach(function(item) {
//         let allData = item.getAttribute('data-num')
//     })
//     catalogContent.forEach(function(i) {
//         let allContent = i.getAttribute('id')
//         console.log(allContent)
//     })
//     if (allContent == allData) {
//         console.log('smth')
//     }
// }

tabsBtn.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault()

        let anchor = tab.getAttribute('href').replace('#', '')
        let currentBtn = tab
        let thisId = currentBtn.getAttribute('data-num')
        let currentTab = document.getElementById(`tab${thisId}`)

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(item => {
                item.classList.remove('active__a')
            })
            catalogContent.forEach(item => {
                item.classList.remove('active')
                item.classList.add('hidden')
            })
    
            currentBtn.classList.add('active__a')
            currentTab.classList.add('active')
            currentTab.classList.remove('hidden')
        }


    })
})
// deleteUselessContent()