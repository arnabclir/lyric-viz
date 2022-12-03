import { useRef } from "react";
import Controls from "./Controls";
import {
  CATAGORICAL_ENCODING,
  CATAGORICAL_FIELD,
  CONTINUOUS_FIELD,
  CONTINUOUS_LOWER_BOUND,
  CONTINUOUS_UPPER_BOUND,
  deepscatterInitialPrefs,
} from "./the-only-files-that-need-dataset-specific-editing/data-specefic-metadata";
import ScatterPlot from "./deepscatter-dist-for-ease-of-access-and-edit";
import DeepScatterWrapper, {
  generateCatagoricalFilter,
  generateRangeFilterObject,
} from "./DeepScatterWrapper";
import Scrollytelling from "./scrollytelling/Scrollytelling";
import type { StoryStep } from "./scrollytelling/scrollytelling-utils";

function App() {
  const plotRef = useRef<ScatterPlot>();

  const updatePlotOnStepChange = ({ storyStep }: { storyStep: StoryStep }) => {
    const { zoomTo, prefsUpdate } = storyStep;
    if (plotRef.current && (zoomTo || prefsUpdate)) {
      plotRef.current.plotAPI({
        // TODO: every step should assume that it's applying changes to a blank,
        // default state. Ensure changes from the previous step don't carry over.
        zoom: {
          bbox: zoomTo,
        },
        ...prefsUpdate,
      });
    }
  };

  const updateRangeFilter = ({
    field,
    min,
    max,
  }: {
    field: string;
    min: number;
    max: number;
  }) => {
    plotRef?.current?.plotAPI({
      encoding: { filter: generateRangeFilterObject({ field, min, max }) },
    });
  };

  const rangeSliderProps = {
    field: CONTINUOUS_FIELD,
    updateRangeFilter,
    lowerBound: CONTINUOUS_LOWER_BOUND,
    upperBound: CONTINUOUS_UPPER_BOUND,
  };

  const updateCatagoricalFilter = ({
    field,
    selectedValues,
  }: {
    field: string;
    selectedValues: Array<string>;
  }) => {
    plotRef?.current?.plotAPI({
      encoding: {
        filter2: generateCatagoricalFilter({
          field,
          selectedValues,
        }),
      },
    });
  };

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <DeepScatterWrapper plotRef={plotRef} prefs={deepscatterInitialPrefs}>
          <Controls
            rangeSliderProps={rangeSliderProps}
            catagoricalField={CATAGORICAL_FIELD}
            catagoricalEncoding={CATAGORICAL_ENCODING}
            updateCatagoricalFilter={updateCatagoricalFilter}
          />
          <Scrollytelling updatePlotOnStepChange={updatePlotOnStepChange} />
        </DeepScatterWrapper>
      </div>
    </>
  );
}

export default App;
