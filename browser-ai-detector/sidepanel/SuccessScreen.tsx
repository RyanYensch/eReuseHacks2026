import GaugeComponent from "~node_modules/react-gauge-component/dist/lib";
import "./success.css"

export function SuccessScreen({ result }) {
  return (
    // This is where the results will be shown
    <div className="flex flex-col justify-center h-screen bg-gray-800">
      <div className="success-page">
        <h1 className="mb-4 text-3xl font-bold text-white text-heading md:text-5xl lg:text-6xl">
          Browser&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            AI Detector
          </span>
        </h1>
        <h2 className="text-lg font-medium text-white text-body lg:text-xl pb-4">
          {result.likelihood}
        </h2>
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
<<<<<<< HEAD
              defaultTickValueConfig: { style: { fontSize: "9px", fill: "#000000" } },
=======
              defaultTickValueConfig: { style: { fontSize: "9px", fill: "#ffffffcb" } },
>>>>>>> main
              defaultTickLineConfig: {
                distanceFromText: 8,
                distanceFromArc: 5,
                width: 1,
                length: 4,
<<<<<<< HEAD
                color: "#000000"
              }
            }
          }}
      />
    </>
=======
                color: "#ffffffc2"
              }
            }
          }}
        />
        {result.kind === "image" ? (
          <>
            <h2 className="mb-4 mt-6 text-xl font-bold text-white text-heading md:text-3xl lg:text-4xl">
              Your Image
            </h2>
            <img className="w-screen h-auto px-4" src={result.imageUrl} />
          </>
        ) : (
          <>
            <h2 className="mb-2 mt-4 text-xl font-bold text-white text-heading md:text-3xl lg:text-4xl">
              Your Text
            </h2>
            <p className="text-lg font-normal text-white text-body lg:text-xl pb-4">{result.preview}</p>
          </>
        )}
      </div>
    </div>
>>>>>>> main
  );
};