export class SocialInsurance {
    static #retirementFactor = 0.1925;
    static #disabilityPensionFactor = 0.08;
    static #accidentPensionFactor = 0.0167;
    static #healthPensionFactor = 0.0; //0.0245; no need to pay it
    static #workFundAndOther = 0.0245;
    static #baseFactor = 0.6;

    static getSocialInsuranceCost(annualEarnings) {
        const base = this.#baseFactor * annualEarnings;
        return base * (this.#retirementFactor
            + this.#disabilityPensionFactor
            + this.#accidentPensionFactor
            + this.#healthPensionFactor
            + this.#workFundAndOther);
    }
}