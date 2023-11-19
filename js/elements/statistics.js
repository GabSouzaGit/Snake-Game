const statistics = {
    deaths: 0,
    points: 0,
    updateStatistics: () => {
        const points = document.querySelector('#points span');
        const deaths = document.querySelector('#deaths span');
        points.textContent = statistics.points;
        deaths.textContent = statistics.deaths;
    }
}

export default statistics;