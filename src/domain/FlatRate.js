import {SocialInsurance} from "@/domain/SocialInsurance";

export class FlatRate {
    static #annualEarningsThr1 = 60_000;
    static #annualEarningsThr2 = 300_000;
    static #healthInsuranceFactor = 0.09;

    #averageCountryPay;
    #annualRevenue;
    #taxFactor;
    #costsFactor

    constructor(costsFactor, taxFactor, averageCountrysPay, annualRevenue) {
        this.#averageCountryPay = averageCountrysPay;
        this.#annualRevenue = annualRevenue;
        this.#taxFactor = taxFactor;
        this.#costsFactor = costsFactor;
    }

    #getHealthInsuranceBase() {
        if (this.annualRevenue < FlatRate.#annualEarningsThr1) {
            return 0.6 * this.#averageCountryPay;
        } else if (this.annualRevenue > FlatRate.#annualEarningsThr1
            && this.annualRevenue < FlatRate.#annualEarningsThr2) {
            return 1.0 * this.#averageCountryPay;
        }
        return 1.8 * this.#averageCountryPay;
    }

    #getTotalInsurancesCost() {
        const healthInsuranceBase = this.#getHealthInsuranceBase();
        const healthInsuranceCost = healthInsuranceBase * FlatRate.#healthInsuranceFactor;

        const socialInsuranceCost = SocialInsurance.getSocialInsuranceCost(this.#annualRevenue)
        return healthInsuranceCost + socialInsuranceCost;
    }

    #getAnnualEarnings(annualRevenue, annualRevenue)

}