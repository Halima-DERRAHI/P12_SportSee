import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from 'recharts';
import styles from './SessionsChart.module.css'

function AverageSessionsChart({ data }) {
    return (
        <div>
            <div className={styles.linechart}>
                <span className={styles.title}>Durée moyenne des<br/> sessions</span>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data.sessions}
                        margin={{
                            top: 0,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <XAxis 
                            dataKey="day" 
                            tickLine={false} 
                            axisLine={false} 
                            stroke="white" 
                            style={{ opacity: "0.5" }} 
                        />
                        <YAxis 
                            hide={true} 
                            domain={[0, 'dataMax + 40']} />
                        <Line 
                            type="monotone" 
                            dataKey="sessionLength" 
                            stroke="white" 
                            style={{ opacity: "0.5" }} 
                            strokeWidth={2} 
                            dot={false} 
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default AverageSessionsChart;