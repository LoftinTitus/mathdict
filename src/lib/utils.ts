import type { Term } from './types.js';

/**
 * Filter terms by search query
 */
export function filterTermsBySearch(terms: Term[], query: string): Term[] {
	if (!query.trim()) return terms;
	
	const lowerQuery = query.toLowerCase().trim();
	return terms.filter(term => 
		term.name.toLowerCase().includes(lowerQuery) ||
		term.definition.toLowerCase().includes(lowerQuery) ||
		term.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
	);
}

/**
 * Filter terms by subject
 */
export function filterTermsBySubject(terms: Term[], subject: string): Term[] {
	if (!subject) return terms;
	return terms.filter(term => term.subject.toLowerCase() === subject.toLowerCase());
}

/**
 * Get unique subjects from terms
 */
export function getUniqueSubjects(terms: Term[]): string[] {
	return [...new Set(terms.map(term => term.subject))].sort();
}

/**
 * Get terms by difficulty level
 */
export function filterTermsByDifficulty(terms: Term[], difficulty: Term['difficulty']): Term[] {
	if (!difficulty) return terms;
	return terms.filter(term => term.difficulty === difficulty);
}

/**
 * Sort terms alphabetically by name
 */
export function sortTermsAlphabetically(terms: Term[]): Term[] {
	return [...terms].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get random terms for suggestions
 */
export function getRandomTerms(terms: Term[], count: number = 3): Term[] {
	const shuffled = [...terms].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}
