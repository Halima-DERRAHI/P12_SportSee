import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';
import styles from './SessionsChart.module.css';

function AverageSessionsChart({ data }) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.toolTipContainer}>
                    <p className={styles.toolTipText}>{payload[0].value}min</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={styles.linechart}>
            <span className={styles.title}>Durée moyenne des<br/> sessions</span>
            <ResponsiveContainer width="100%" height="100%" className="responsiveChart">
                <LineChart
                    data={data.sessions}
                    margin={{ top: 0, right: 0, left: 0, bottom: 15 }}
                    onMouseMove={(e) => {
                        if ( e.isTooltipActive === true ) {
                            const chartContainer = document.querySelector('.responsiveChart');
                            let div = chartContainer.querySelector('.recharts-wrapper');
                            let windowWidth = div.clientWidth;
                            let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
                            div.style.background = `linear-gradient(90deg, transparent ${mouseXpercentage}%, rgba(0,0,0,0.2) ${mouseXpercentage}%, rgba(0,0,0,0.2) 100%)`;
                        }
                    }}   
                    onMouseLeave={() => {
                        const chartContainer = document.querySelector('.responsiveChart');
                        let div = chartContainer.querySelector('.recharts-wrapper');
                        div.style.background = 'none';
                    }}
                >
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="40%" stopColor="rgba(255, 255, 255, 0.4)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255)" />
                        </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="day" 
                        tickLine={false} 
                        axisLine={false} 
                        stroke="white" 
                        style={{ opacity: "0.6" }} 
                        tick={{ fontSize: 12}}
                    />
                    <YAxis hide domain={[0, 'dataMax + 40']} />
                    <Line 
                        type="monotone" 
                        dataKey="sessionLength" 
                        strokeWidth={2} 
                        dot={false} 
                        activeDot={{
                            r: 4,
                            strokeWidth: 8,
                            stroke: "white",
                            strokeOpacity: 0.2,
                            fill: "white"
                        }}
                        isAnimationActive={false}
                        stroke="url(#grad)"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessionsChart;