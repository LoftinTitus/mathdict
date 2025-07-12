export interface Term {
	id: string;
	name: string;
	definition: string;
	subject: string;
	formula?: string;
	example?: string;
	tags?: string[];
	difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Subject {
	name: string;
	description: string;
	termCount: number;
}
