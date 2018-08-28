import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('mostrar pagina de inicio', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'redireccionar a /rentals automaticamente');
  });

  test('mostrar /about', async function(assert) {
    await visit('/about');
    assert.equal(currentURL(), '/about', 'muestra pagina /about acerca de');
  });

  test('mostrar /contact', async function(assert) {
    await visit('/contact');
    assert.equal(currentURL(), '/contact', 'muestra pagina /contact "contacto"');
  });

  test('should list available rentals.', async function (assert) {
    await visit('/rentals');
    assert.equal(currentURL(), '/rentals', 'Deberia mostrar la pagina alquileres /rentals');
  });

  test('should filter the list of rentals by city.', async function (assert) {
  });

  test('should show details for a selected rental', async function (assert) {
  });

  // pruebas de click
  test('click link informacion compañia', async function (assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'deberia redirigir a acerca de');
  });
  test('click link contacto', async function (assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'deberia redirigir a contacto');
  });

  // pruebas de cantidad de elementos
  test('should list available rentals.', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });
});
