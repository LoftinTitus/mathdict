import type { Term } from '../lib/types.js';

export const terms: Term[] = [
	{
		id: 'derivative',
		name: 'Derivative',
		definition: 'The rate at which a function changes at any given point. It represents the slope of the tangent line to the function at that point.',
		subject: 'Calculus',
		formula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
		example: "The derivative of f(x) = x² is f'(x) = 2x",
		tags: ['calculus', 'rate of change', 'slope'],
		difficulty: 'intermediate'
	},
	{
		id: 'integral',
		name: 'Integral',
		definition: 'The reverse operation of differentiation. It represents the area under a curve or the accumulation of quantities.',
		subject: 'Calculus',
		formula: '∫ f(x) dx',
		example: '∫ x² dx = x³/3 + C',
		tags: ['calculus', 'area', 'antiderivative'],
		difficulty: 'intermediate'
	},
	{
		id: 'quadratic-formula',
		name: 'Quadratic Formula',
		definition: 'A formula that provides the solutions to any quadratic equation of the form ax² + bx + c = 0.',
		subject: 'Algebra',
		formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
		example: 'For x² - 5x + 6 = 0: x = (5 ± √(25-24)) / 2 = (5 ± 1) / 2',
		tags: ['algebra', 'quadratic', 'formula'],
		difficulty: 'beginner'
	},
	{
		id: 'pythagorean-theorem',
		name: 'Pythagorean Theorem',
		definition: 'In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides.',
		subject: 'Geometry',
		formula: 'a² + b² = c²',
		example: 'In a triangle with sides 3, 4, and 5: 3² + 4² = 9 + 16 = 25 = 5²',
		tags: ['geometry', 'triangle', 'theorem'],
		difficulty: 'beginner'
	},
	{
		id: 'sine-function',
		name: 'Sine Function',
		definition: 'A trigonometric function that gives the ratio of the opposite side to the hypotenuse in a right triangle.',
		subject: 'Trigonometry',
		formula: 'sin(θ) = opposite / hypotenuse',
		example: 'sin(30°) = 1/2',
		tags: ['trigonometry', 'function', 'ratio'],
		difficulty: 'beginner'
	},
	{
		id: 'natural-logarithm',
		name: 'Natural Logarithm',
		definition: 'The logarithm to the base e (approximately 2.718). It is the inverse function of the exponential function.',
		subject: 'Algebra',
		formula: 'ln(x) = log_e(x)',
		example: 'ln(e) = 1, ln(e²) = 2',
		tags: ['logarithm', 'exponential', 'function'],
		difficulty: 'intermediate'
	},
	{
		id: 'standard-deviation',
		name: 'Standard Deviation',
		definition: 'A measure of the amount of variation or dispersion in a set of values.',
		subject: 'Statistics',
		formula: 'σ = √(Σ(x - μ)² / N)',
		example: 'For data set [2, 4, 4, 4, 5, 5, 7, 9], σ ≈ 2.0',
		tags: ['statistics', 'deviation', 'variance'],
		difficulty: 'intermediate'
	},
	{
		id: 'limit',
		name: 'Limit',
		definition: 'The value that a function approaches as the input approaches some value.',
		subject: 'Calculus',
		formula: 'lim(x→a) f(x) = L',
		example: 'lim(x→0) (sin x / x) = 1',
		tags: ['calculus', 'limit', 'approach'],
		difficulty: 'intermediate'
	},
	{
		id: 'matrix',
		name: 'Matrix',
		definition: 'A rectangular array of numbers, symbols, or expressions arranged in rows and columns.',
		subject: 'Linear Algebra',
		formula: 'A = [aᵢⱼ] where i is row, j is column',
		example: 'A 2×2 matrix: [[1, 2], [3, 4]]',
		tags: ['linear algebra', 'array', 'transformation'],
		difficulty: 'beginner'
	},
	{
		id: 'binomial-theorem',
		name: 'Binomial Theorem',
		definition: 'A formula for expanding powers of binomials.',
		subject: 'Algebra',
		formula: '(x + y)ⁿ = Σ(k=0 to n) C(n,k) × xⁿ⁻ᵏ × yᵏ',
		example: '(x + y)² = x² + 2xy + y²',
		tags: ['algebra', 'binomial', 'expansion'],
		difficulty: 'intermediate'
	}
];
