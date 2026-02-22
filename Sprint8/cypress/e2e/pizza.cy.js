describe('Teknolojik Yemekler - Pizza Sipariş', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // ============================================================
  // TEST 1: Anasayfadan sipariş formuna navigasyon
  // ============================================================
  it('anasayfadaki "Sipariş Ver" butonu sipariş formuna yönlendirmeli', () => {
    cy.get('[data-testid="home-order-btn"]').click()
    cy.url().should('include', '/order')
    cy.get('[data-testid="isim-input"]').should('exist')
  })

  // ============================================================
  // TEST 2: İsim alanına metin girme
  // ============================================================
  it('isim alanına metin girilebilmeli', () => {
    cy.visit('/order')
    cy.get('[data-testid="isim-input"]')
      .type('Berkcan')
      .should('have.value', 'Berkcan')
  })

  // ============================================================
  // TEST 3: 3 karakterden az isim girilince submit disabled olmalı
  // ============================================================
  it('3 karakterden az isim girilince submit butonu disabled olmalı', () => {
    cy.visit('/order')
    cy.get('[data-testid="isim-input"]').type('Ab')
    cy.get('[data-testid="submit-btn"]').should('be.disabled')
  })

  // ============================================================
  // TEST 4: Birden fazla malzeme seçilebilmeli
  // ============================================================
  it('birden fazla malzeme seçilebilmeli', () => {
    cy.visit('/order')

    cy.get('[data-testid="malzeme-Pepperoni"]').check()
    cy.get('[data-testid="malzeme-Sosis"]').check()
    cy.get('[data-testid="malzeme-Soğan"]').check()
    cy.get('[data-testid="malzeme-Domates"]').check()

    cy.get('[data-testid="malzeme-Pepperoni"]').should('be.checked')
    cy.get('[data-testid="malzeme-Sosis"]').should('be.checked')
    cy.get('[data-testid="malzeme-Soğan"]').should('be.checked')
    cy.get('[data-testid="malzeme-Domates"]').should('be.checked')
  })

  // ============================================================
  // TEST 5: Formu eksiksiz doldurup gönderme
  // ============================================================
  it('form eksiksiz doldurulunca sipariş gönderilebilmeli', () => {
    cy.visit('/order')

    // API isteğini yakala
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 201,
      body: {
        id: 42,
        isim: 'Test Kullanıcı',
        boyut: 'Orta',
        malzemeler: ['Pepperoni', 'Sosis', 'Soğan', 'Domates'],
        notlar: 'Ekstra sos',
        createdAt: '2025-01-01T12:00:00.000Z',
      },
    }).as('pizzaPost')

    // İsim gir
    cy.get('[data-testid="isim-input"]').type('Test Kullanıcı')

    // Boyut seç
    cy.get('[data-testid="boyut-Orta"]').check()

    // Malzeme seç (en az 4)
    cy.get('[data-testid="malzeme-Pepperoni"]').check()
    cy.get('[data-testid="malzeme-Sosis"]').check()
    cy.get('[data-testid="malzeme-Soğan"]').check()
    cy.get('[data-testid="malzeme-Domates"]').check()

    // Not ekle
    cy.get('[data-testid="notlar-input"]').type('Ekstra sos')

    // Submit butonu aktif olmalı
    cy.get('[data-testid="submit-btn"]').should('not.be.disabled')

    // Formu gönder
    cy.get('[data-testid="submit-btn"]').click()

    // API isteğinin gönderilmesini bekle
    cy.wait('@pizzaPost')

    // Başarı sayfasına yönlendirilmeli
    cy.url().should('include', '/success')
    cy.contains('Sipariş Alındı').should('be.visible')
  })

  // ============================================================
  // TEST 6: Eksik form verisiyle submit butonu disabled olmalı
  // ============================================================
  it('form eksik olunca submit butonu disabled olmalı', () => {
    cy.visit('/order')

    // Sadece isim gir, boyut ve malzeme seçme
    cy.get('[data-testid="isim-input"]').type('Berkcan')
    cy.get('[data-testid="submit-btn"]').should('be.disabled')
  })

  // ============================================================
  // TEST 7: Başarı sayfasında sipariş özeti gösterilmeli
  // ============================================================
  it('başarı sayfasında sipariş özeti gösterilmeli', () => {
    cy.visit('/order')

    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 201,
      body: {
        id: 99,
        isim: 'Ahmet Yılmaz',
        boyut: 'Büyük',
        malzemeler: ['Mantar', 'Mısır', 'Sosis', 'Pepperoni'],
        notlar: '',
        createdAt: new Date().toISOString(),
      },
    }).as('pizzaOrder')

    cy.get('[data-testid="isim-input"]').type('Ahmet Yılmaz')
    cy.get('[data-testid="boyut-Büyük"]').check()
    cy.get('[data-testid="malzeme-Mantar"]').check()
    cy.get('[data-testid="malzeme-Mısır"]').check()
    cy.get('[data-testid="malzeme-Sosis"]').check()
    cy.get('[data-testid="malzeme-Pepperoni"]').check()
    cy.get('[data-testid="submit-btn"]').click()
    cy.wait('@pizzaOrder')

    cy.url().should('include', '/success')
    cy.contains('Ahmet Yılmaz').should('be.visible')
    cy.contains('Büyük').should('be.visible')
  })
})
