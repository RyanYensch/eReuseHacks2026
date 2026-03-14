import GaugeComponent from "~node_modules/react-gauge-component/dist/lib";

export function SuccessScreen({ result }) {
  return (
    // This is where the results will be shown
    <>
      <h2>Results</h2>
      <p>{result.likelihood}</p>
      {/* 
        Credits to this guy for giving a sandbox to custom gauge 
        https://antoniolago.github.io/react-gauge-component/
      */}
      <GaugeComponent
        value={parseFloat(result.percentage)}
        type="semicircle"
        arc={{
            gradient: true,
            width: 0.15,
            padding: 0,
            subArcs: [],
            nbSubArcs: 10,
            colorArray: ["#5BE12C", "#F5CD19", "#EA4228"],
            effects: { glow: false }
          }}
        pointer={{
            type: "arrow",
            color: "#dfa810",
            maxFps: 30,
            baseColor: "#ffffff",
            length: 0.7,
            width: 15,
            strokeWidth: 0,
            arrowOffset: 0.65
          }}
        labels={{
            valueLabel: {
              style: { fontSize: "24px", fill: "#e0e0e0" },
              animateValue: true,
              matchColorWithArc: true,
              offsetX: 1,
              hide: false
            },
            tickLabels: {
              type: "outer",
              ticks: [
                { value: 0 },
                { value: 20 },
                { value: 40 },
                { value: 60 },
                { value: 80 }
              ],
              defaultTickValueConfig: { style: { fontSize: "9px", fill: "#000000" } },
              defaultTickLineConfig: {
                distanceFromText: 8,
                distanceFromArc: 5,
                width: 1,
                length: 4,
                color: "#000000"
              }
            }
          }}
      />
    </>
  );
};