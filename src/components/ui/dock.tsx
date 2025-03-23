"use client";

import React, { forwardRef, useRef, createContext, useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

// Context for managing mouseX and mouseY
interface DockContextProps {
  mouseX: any;
  mouseY: any;
}

const DockContext = createContext<DockContextProps | null>(null);

export const useDock = () => {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("useDock must be used within a DockProvider");
  }
  return context;
};

// Dock Component
export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
);

const DockComponent = forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, orientation = "horizontal", ...props }, ref) => {
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    return (
      <DockContext.Provider value={{ mouseX, mouseY }}>
        <motion.div
          ref={ref}
          onMouseMove={(e) => {
            if (orientation === "horizontal") {
              mouseX.set(e.clientX);
            } else {
              mouseY.set(e.clientY);
            }
          }}
          onMouseLeave={() => {
            if (orientation === "horizontal") {
              mouseX.set(Infinity);
            } else {
              mouseY.set(Infinity);
            }
          }}
          {...props}
          className={cn(dockVariants({ className }), {
            "flex-col h-max": orientation === "vertical",
            "flex-row": orientation === "horizontal",
          })}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  }
);

DockComponent.displayName = "DockComponent";

const Dock: React.FC<DockProps> = (props) => {
  return <DockComponent {...props} />;
};

// DockIcon Component
export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  className,
  children,
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY } = useDock();

  const distanceHeightCalc = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const distanceWidthCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const heightSync = useTransform(
    distanceHeightCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const widthSync = useTransform(
    distanceWidthCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ height, width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };