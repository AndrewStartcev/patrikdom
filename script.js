$(document).ready(function () {

  // При клик на элемент, получаем его цену, флрматируем в тип Number
  // Прибавляем все типы и выводим в форматированном виде ## ### ₽

  let homePrice = $('#wpforms-896-field_1').val()

  let carniz = homePrice * 0.17     // Подшив карнизов с водостоком
  let okosycka = homePrice * 0.15   // Окосячка  (подготовка под монтаж окон и дверей)
  let okna = homePrice * 0.1        // Окна
  let dveri = homePrice * 0.13      // Двери
  let uteplenie = homePrice * 0.09  // Утепление
  let pol = homePrice * 0.12        // Пол чистовой
  let potolok = homePrice * 0.11    // Потолок чистовой

  let brus = $('input[name="material"]:checked').val()
  let fundament = $('input[name="fundament"]:checked').val()
  let crovly = $('input[name="crovly"]:checked').val()
  homePrice = homePrice.replace(' ', '').replace('₽', '')

  // ====================== Типо для вывод цен ===============================

  function CalcPrice() {
    $('#materials .project-calculator__element:first-child .calculator-element__price').html(String(Math.round(homePrice * 0.125)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.15)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.29)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(4) .calculator-element__price').html(String(Math.round(homePrice * 0.3)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(5) .calculator-element__price').html(String(Math.round(homePrice * 0.5)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('input#material_1').val(Math.round(homePrice * 0.125))
    $('input#material_2').val(Math.round(homePrice * 0.15))
    $('input#material_3').val(Math.round(homePrice * 0.29))
    $('input#material_4').val(Math.round(homePrice * 0.3))
    $('input#material_5').val(Math.round(homePrice * 0.5))

    $('#fundaments .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#fundaments .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.39)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('input#fundament_1').val(Math.round(homePrice * 0.2))
    $('input#fundament_2').val(Math.round(homePrice * 0.39))

    $('#crovlys .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.17)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#crovlys .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.19)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#crovlys .project-calculator__element:nth-child(4) .calculator-element__price').html(String(Math.round(homePrice * 0.23)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#crovlys .project-calculator__element:nth-child(5) .calculator-element__price').html(String(Math.round(homePrice * 0.3)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('input#crovly_1').val(Math.round(homePrice * 0.17))
    $('input#crovly_2').val(Math.round(homePrice * 0.19))
    $('input#crovly_3').val(Math.round(homePrice * 0.23))
    $('input#crovly_4').val(Math.round(homePrice * 0.3))

    brus = $('input[name="material"]:checked').val()
    fundament = $('input[name="fundament"]:checked').val()
    crovly = $('input[name="crovly"]:checked').val()

    calculateBasic()
  }

  CalcPrice()

  $('#start').click(function () {
    startTest()
  })

  function startTest() {
    homePrice = $('#wpforms-896-field_1').val()
    carniz = homePrice * 0.17     // Подшив карнизов с водостоком
    okosycka = homePrice * 0.15   // Окосячка  (подготовка под монтаж окон и дверей)
    okna = homePrice * 0.1        // Окна
    dveri = homePrice * 0.13      // Двери
    uteplenie = homePrice * 0.09  // Утепление
    pol = homePrice * 0.12        // Пол чистовой
    potolok = homePrice * 0.11
    CalcPrice()
  }


  // ============================= End Типо для вывода цен ==================



  $('input[name="fundament"').change(function () {
    fundament = $(this).val()
    calculateBasic()
  })
  $('input[name="material"').change(function () {
    brus = $(this).val()
    calculateBasic()
  })
  $('input[name="crovly"').change(function () {
    crovly = $(this).val()
    calculateBasic()
  })

  function calculateBasic() {
    let summ = Number(carniz) + Number(okosycka) + Number(okna) + Number(dveri) + Number(uteplenie) + Number(pol) + Number(potolok) + Number(brus) + Number(fundament) + Number(crovly)

    summ = String(Math.round(summ)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    $('.calculator-tablo__title span').html(summ + ' ₽')
  }
})
