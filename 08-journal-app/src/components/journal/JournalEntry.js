

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://img.money.com/2017/07/iceland-getty-stock.jpg?quality=60&w=800)'
            }}
        >

        </div>

        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo dia
            </p>
            <p className="journal__entry-content">
                jklgfdkjlgdflkjgfdkljgfdlkjgdfljkdflklkjfdg
            </p>

        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
