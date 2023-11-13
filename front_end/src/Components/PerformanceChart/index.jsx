import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import styles from './PerformanceChart.module.css'

function PerformanceChart({data}) {
    //console.log(data.kind);

    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart 
                        cx='50%' 
                        cy='50%' 
                        outerRadius='68%' 
                        data={data.kind}
                    >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis	
                            dataKey="kind" 
                            stroke='white' 
                            tickLine={false} 
                            axisLine={false}  
                            tick={{ fontSize: 12 }}
                        />
                        <Radar 
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.7}
                            />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default PerformanceChart;