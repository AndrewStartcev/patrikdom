$(document).ready(function () {

  // При клик на элемент, получаем его цену, флрматируем в тип Number
  // Прибавляем все типы и выводим в форматированном виде ## ### ₽

  let homePrice = $('#wpforms-896-field_1').val()

  let carniz = 0        // Подшив карнизов с водостоком
  let okosycka = 0    // Окосячка  (подготовка под монтаж окон и дверей)
  let okna = 0           // Окна
  let dveri = 0        // Двери
  let uteplenie = 0 // Утепление
  let pol = 0             // Пол чистовой
  let potolok = 0    // Потолок чистовой

  let brus = $('input[name="material"]:checked').val()
  let fundament = $('input[name="fundament"]:checked').val()
  let crovly = $('input[name="crovly"]:checked').val()
  homePrice = homePrice.replace(' ', '').replace('₽', '')

  // ====================== Типо для вывод цен ===============================

  function CalcPrice() {
    $('#materials .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.125)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.15)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(4) .calculator-element__price').html(String(Math.round(homePrice * 0.29)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(5) .calculator-element__price').html(String(Math.round(homePrice * 0.3)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#materials .project-calculator__element:nth-child(6) .calculator-element__price').html(String(Math.round(homePrice * 0.5)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('input#material_1').val(Math.round(homePrice * 0.125))
    $('input#material_3').val(Math.round(homePrice * 0.15))
    $('input#material_4').val(Math.round(homePrice * 0.29))
    $('input#material_5').val(Math.round(homePrice * 0.3))
    $('input#material_6').val(Math.round(homePrice * 0.5))

    $('#fundaments .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#fundaments .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.38)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('input#fundament_2').val(Math.round(homePrice * 0.2))
    $('input#fundament_3').val(Math.round(homePrice * 0.39))

    $('#crovlys .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.17)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#crovlys .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.19)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#crovlys .project-calculator__element:nth-child(4) .calculator-element__price').html(String(Math.round(homePrice * 0.23)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#crovlys .project-calculator__element:nth-child(5) .calculator-element__price').html(String(Math.round(homePrice * 0.3)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('input#crovly_2').val(Math.round(homePrice * 0.17))
    $('input#crovly_3').val(Math.round(homePrice * 0.19))
    $('input#crovly_4').val(Math.round(homePrice * 0.23))
    $('input#crovly_5').val(Math.round(homePrice * 0.3))

    $('#dops .project-calculator__element:nth-child(1) .calculator-element__price').html(String(Math.round(homePrice * 0.17)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#dops .project-calculator__element:nth-child(2) .calculator-element__price').html(String(Math.round(homePrice * 0.15)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#dops .project-calculator__element:nth-child(3) .calculator-element__price').html(String(Math.round(homePrice * 0.1)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#dops .project-calculator__element:nth-child(4) .calculator-element__price').html(String(Math.round(homePrice * 0.13)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#dops .project-calculator__element:nth-child(5) .calculator-element__price').html(String(Math.round(homePrice * 0.09)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#dops .project-calculator__element:nth-child(6) .calculator-element__price').html(String(Math.round(homePrice * 0.12)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')
    $('#dops .project-calculator__element:nth-child(7) .calculator-element__price').html(String(Math.round(homePrice * 0.11)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ' ₽')

    $('input#carniz').val(Math.round(homePrice * 0.17))
    $('input#okosycka').val(Math.round(homePrice * 0.15))
    $('input#okna').val(Math.round(homePrice * 0.1))
    $('input#dveri').val(Math.round(homePrice * 0.13))
    $('input#uteplenie').val(Math.round(homePrice * 0.09))
    $('input#pol').val(Math.round(homePrice * 0.12))
    $('input#potolok').val(Math.round(homePrice * 0.11))

    brus = $('input[name="material"]:checked').val()
    fundament = $('input[name="fundament"]:checked').val()
    crovly = $('input[name="crovly"]:checked').val()
    // carniz = $('input[name="carniz"]:checked').val()        // Подшив карнизов с водостоком
    // okosycka = $('input[name="okosycka"]:checked').val()    // Окосячка  (подготовка под монтаж окон и дверей)
    // okna = $('input[name="okna"]:checked').val()           // Окна
    // dveri = $('input[name="dveri"]:checked').val()         // Двери
    // uteplenie = $('input[name="uteplenie"]:checked').val() // Утепление
    // pol = $('input[name="pol"]:checked').val()             // Пол чистовой
    // potolok = $('input[name="potolok"]:checked').val()     // Потолок чистовой
    // console.log(okosycka)


    calculateBasic()
  }

  CalcPrice()

  $('#start').click(function () {
    startTest()
  })

  function startTest() {
    homePrice = $('#wpforms-896-field_1').val()
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
  $('input[name="okosycka"').change(function () {
    if ($(this).is(':checked')) {
      okosycka = $(this).val()
    } else {
      okosycka = 0
    }
    calculateBasic()
  })
  $('input[name="carniz"').change(function () {
    if ($(this).is(':checked')) {
      carniz = $(this).val()
    } else {
      carniz = 0
    }
    calculateBasic()
  })
  $('input[name="okna"').change(function () {
    if ($(this).is(':checked')) {
      okna = $(this).val()
    } else {
      okna = 0
    }
    calculateBasic()
  })

  $('input[name="dveri"').change(function () {
    if ($(this).is(':checked')) {
      dveri = $(this).val()
    } else {
      dveri = 0
    }
    calculateBasic()
  })
  $('input[name="uteplenie"').change(function () {
    if ($(this).is(':checked')) {
      uteplenie = $(this).val()
    } else {
      uteplenie = 0
    }
    calculateBasic()
  })
  $('input[name="pol"').change(function () {
    if ($(this).is(':checked')) {
      pol = $(this).val()
    } else {
      pol = 0
    }
    calculateBasic()
  })
  $('input[name="potolok"').change(function () {
    if ($(this).is(':checked')) {
      potolok = $(this).val()
    } else {
      potolok = 0
    }
    calculateBasic()
  })

  function calculateBasic() {
    let summ = Number(brus) + Number(fundament) + Number(crovly) + Number(carniz) + Number(okosycka) + Number(okna) + Number(dveri) + Number(uteplenie) + Number(pol) + Number(potolok)
    let CurrentPrice = Number(homePrice) + Number(summ)

    CurrentPrice = String(Math.round(CurrentPrice)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    $('.calculator-tablo__title span').html(CurrentPrice + ' ₽')
  }
})
