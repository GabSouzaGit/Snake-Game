const statistics = {
    deaths: 0,
    points: 0,
    record: 0,
    updateStatistics: () => {
        const points = document.querySelector('#points span');
        const deaths = document.querySelector('#deaths span');
        const record = document.querySelector('#record span');
        points.textContent = statistics.points;
        deaths.textContent = statistics.deaths;
        record.textContent = statistics.record;
    }
}

export default statistics;