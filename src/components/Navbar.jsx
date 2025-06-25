import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="bg-white shadow-sm">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center">
                    <img
                        src="./logo.svg"
                        className="w-10 h-10 mr-2 text-primary"
                    />
                    <h1 class="text-2xl font-bold text-text">TaskVibe</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <Link to="/auth" class="px-4 py-2 text-primary font-medium hover:text-accent transition-colors">Log In</Link>
                    <button class="btn-primary px-4 py-2 rounded-lg shadow-sm">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
