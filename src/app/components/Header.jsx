import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <Link href='/welcome'>
                    Home
                </Link>
            </div>
        </header>
    )
}

export default Header