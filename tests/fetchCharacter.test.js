require('../mocks/fetchSimulator');
const { id } = require('../mocks/character');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });

  test('Verifica se retorna erro ao executar a funcao sem parametro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  it('verifies if returns \'invalid id\' when calling with an invalid id', async () => {
    const response = await fetchCharacter('anything here');
    expect(response).toBe('Invalid id');
  });

  it('verifies if fetch is called with correct endpoint', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});