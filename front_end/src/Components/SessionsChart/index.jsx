import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';
import styles from './SessionsChart.module.css'

function AverageSessionsChart({ data }) {

    const CustomTooltip = ({ active, payload, label }) => {
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
                            bottom: 15,
                        }}
                    >

                        <XAxis 
                            dataKey="day" 
                            tickLine={false} 
                            axisLine={false} 
                            stroke="white" 
                            style={{ opacity: "0.6" }} 
                            tick={{ fontSize: 12}}
                         />
                        <YAxis 
                            hide={true} 
                            domain={[0, 'dataMax + 30']} 
                        />
                        <Line 
                            type="monotone" 
                            dataKey="sessionLength" 
                            stroke="white" 
                            style={{ opacity: "0.5" }} 
                            strokeWidth={2} 
                            dot={false} 
                        />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default AverageSessionsChart;