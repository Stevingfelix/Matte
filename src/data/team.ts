export interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

export const teamMembers: TeamMember[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  name: "Alex Petrovski",
  designation: "UX Designer, Research",
  image: `team-1-${n}.jpg`,
}));
