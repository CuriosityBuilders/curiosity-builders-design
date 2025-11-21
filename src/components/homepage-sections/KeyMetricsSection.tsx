"use client";

import { CountUp } from "@/components/ui/CountUp";
import { Particles } from "@/components/ui/particles";
import { Section } from "@/components/ui/Section";

interface Metric {
  value: number;
  prefix?: string;
  label: string;
}

export function KeyMetricsSection() {
  const metrics: Metric[] = [
    { value: 50, prefix: "+", label: "acteurs interviewés" },
    { value: 15, prefix: "+", label: "études publiées" },
    { value: 3, prefix: "+", label: "ventures accélérées" },
    { value: 0, label: "Bullshit" },
  ];

  return (
    <Section id="key-metrics" spacing="md" className="relative bg-black">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                {metric.prefix ? (
                  <CountUp value={metric.value} prefix={metric.prefix} />
                ) : (
                  <CountUp value={metric.value} />
                )}
              </p>
              <p className="mt-2 text-sm text-white">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
