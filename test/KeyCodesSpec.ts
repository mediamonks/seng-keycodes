import {expect} from 'chai';
import KeyCode from "../src/lib/KeyCodes";

describe('Keycodes', () =>
{
	it('should return the correct key code', () =>
	{
		expect(KeyCode.A).to.equal('A'.charCodeAt(0));
		expect(KeyCode.B).to.equal('B'.charCodeAt(0));
		expect(KeyCode.C).to.equal('C'.charCodeAt(0));
		expect(KeyCode.D).to.equal('D'.charCodeAt(0));
		expect(KeyCode.E).to.equal('E'.charCodeAt(0));
		expect(KeyCode.F).to.equal('F'.charCodeAt(0));
		expect(KeyCode.A).not.to.equal('B'.charCodeAt(0));
	});
});
