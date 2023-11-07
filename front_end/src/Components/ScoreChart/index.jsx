import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import styles from './ScoreChart.module.css';

function ScoreChart({ data }) {
    const score = `${data}` * 100;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Score</h1>
            <div className={styles.chartContainer}>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <RadialBarChart
                        cx="50%"
                        cy="45%"
                        innerRadius="90%"
                        outerRadius="100%"
                        barSize={10}
                        data={[{ value: score }]} 
                        startAngle={90}
                        endAngle={90 + (score / 100) * 360}
                    >
                    <circle cx="50%" cy="45%" fill="white" r="32%"></circle>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#FF0000" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.infos}>
                <span className={styles.score}>{score}%</span>
                <br />
                <span className={styles.label}>de votre objectif</span>
            </div>
        </div>
    );
}

export default ScoreChart;