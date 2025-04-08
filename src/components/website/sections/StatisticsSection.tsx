import React from "react";

const StatisticsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-zinc-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Transforming Pharmacy Management
          </h2>
          <p className="text-lg text-zinc-500">
            See the impact Pharmart is making for pharmacies across the country.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
            <p className="text-lg font-medium">Pharmacies</p>
            <p className="text-zinc-500">using our platform</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">32%</div>
            <p className="text-lg font-medium">Average Increase</p>
            <p className="text-zinc-500">in operational efficiency</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">$42K</div>
            <p className="text-lg font-medium">Average Savings</p>
            <p className="text-zinc-500">per year for our customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
            <p className="text-lg font-medium">Uptime</p>
            <p className="text-zinc-500">for uninterrupted service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
