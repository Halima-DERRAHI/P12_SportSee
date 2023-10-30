import {BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ActivityChart.module.css'

function ActivityChart ({ data }) {
    const sessions = data.sessions;

    return (
        <div className={styles.ActivityChart}>
             <header className={styles.header}>
                <h2 className={styles.title}>Activité quotidienne</h2>
                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <FontAwesomeIcon icon={faCircle} className={`${styles.circle} ${styles.black}`} />
                        <span>Poids (kg)</span>
                    </div>
                    <div className={styles.legendItem}>
                        <FontAwesomeIcon icon={faCircle} className={`${styles.circle} ${styles.red}`} />
                        <span>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </header>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    data={sessions}
                    margin={{
                    top: 50,
                    right: 10,
                    left: 40,
                    bottom: 5,
                    }}
                    barCategoryGap={35}
                    barGap={10}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false} 
                    />
                    <XAxis 
                        dataKey="day"
                        tickLine={false}
                        tick={{ fontSize: 14 }}
                        padding={{ left: -50, right: -50 }}
                        dy={15} 
                    />
                    <YAxis 
                        dataKey="kilogram" 
                        yAxisId="left" 
                        orientation="right" 
                        stroke="#8884d8" 
                        interval="number"
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 14, fill: '#74798c'}}
                        tickCount={3}
                        dx={20}
                    />
                    <YAxis 
                        dataKey="calories" 
                        yAxisId="right" 
                        orientation="right" 
                        stroke="#82ca9d" 
                        hide={true} 
                    />
                    <Bar 
                        yAxisId="left" 
                        dataKey="kilogram" 
                        fill="#000"
                        radius={[30, 30, 0, 0]}
                        barSize={7} 
                    />
                    <Bar 
                        yAxisId="right" 
                        dataKey="calories" 
                        fill="#e60000"
                        radius={[30, 30, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

export default ActivityChart;