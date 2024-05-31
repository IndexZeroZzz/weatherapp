import { UserIcon, CloudIcon } from '@heroicons/react/24/outline'

export default async function Weather({ params }: { params: { id: string } }) {
    let apiKey = process.env.API_KEY;
    let data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${decodeURIComponent(params.id)}&limit=1&appid=${apiKey}`).then((response) => response.json());
    let coordinates = [data[0].lat, data[0].lon];
    let temperatures = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=${apiKey}`).then(response => response.json());
    return (
        <main className="flex min-h-screen flex-col items-start p-20">
            <div className='flex flex-col items-start justify-between'>
                <h1 className='font-extralight text-6xl'>{`${data[0].state}, ${data[0].country}`}</h1>
                <h2 className='font-bold text-5xl mt-5'>{`${Math.round(temperatures.main.temp)}°C`}</h2>
                <h3 className='font-bold text-5xl mt-5'>{`${temperatures.weather[0].main}`}</h3>
                <div className='flex justify-center items-center mt-5'>
                    <div><UserIcon className='inline h-6 mr-2'></UserIcon> <span className='inline'>{`${Math.round(temperatures.main.feels_like)}°C`}</span></div>
                    <div className='ml-5'><CloudIcon className='inline h-6 mr-2'></CloudIcon> <span className='inline'>{`${Math.round(temperatures.main.humidity)}%`}</span></div>
                </div>
            </div>
        </main>
    );
}
