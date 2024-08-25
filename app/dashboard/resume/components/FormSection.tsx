"use client";
import { useState } from "react";
import PersonalDetails from "./form/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnabledNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Button className="flex gap-2" variant="outline" size="sm">
            <LayoutGrid /> Theme
          </Button>
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enabledNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal details */}
      {activeFormIndex == 1 ? (
        <PersonalDetails enabledNext={(v) => setEnabledNext(v)} />
      ) : null}
      {/* Summary */}
      {/* Experience */}
      {/* Education */}
      {/* Skills */}
    </div>
  );
};

export default FormSection;
