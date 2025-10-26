import { WavyBackground } from "@/components/ui/shadcn-io/wavy-background";
import cx from "classnames";
import styles from "./HomeContainer.module.scss";


const HomeContainer = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <WavyBackground
                backgroundFill="#0f0f23"
                colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9"]}
                waveWidth={50}
                blur={10}
                speed="fast"
                waveOpacity={0.5}
                containerClassName="h-full w-full"
                className="flex items-center justify-center"
            >
                {/* Your content flows above */}
                <div className="text-center text-white z-10">
                    <h1 className={cx("text-6xl font-bold mb-4", styles.fontSairaBold)}>
                        🎉Ribo Mini Homepage✨
                    </h1>
                    <p className={cx("text-xl opacity-80", styles.fontSairaExtraLight)}>
                        this very simple page is created by xoxhaan
                    </p>
                </div>
            </WavyBackground>
        </div>
    );
};

export default HomeContainer;
