import './index.scss';

interface AnimatedLettersProps {
    letterClass: string;
    characters: string[];
    index: number;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ letterClass, characters, index }) => {
    return (
        <span>
            { characters.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + index}`}>
                    {char}
                </span>
            )) }
        </span>
    );
};

export default AnimatedLetters;