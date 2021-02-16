import { assert } from 'chai';

import CoingeckoApi from '../src';

const coingeckoApi = CoingeckoApi;

describe('WIP', () => {
  before((done) => {
    done();
  });

  after((done) => {
    done();
  });

  it('Should get list of coins', (done) => {
    coingeckoApi.coins().list()
      .then((res) => {
        assert.isArray(res);

        const firstElement = res[0];

        assert.property(firstElement, 'id');
        assert.property(firstElement, 'symbol');
        assert.property(firstElement, 'name');

        done();
      });
  });
});