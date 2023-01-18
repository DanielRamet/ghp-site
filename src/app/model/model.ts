
export class PlayerBet {
    public season: string;
    public matchday: string;
    public player: string;
    public hits: number;
}

export class BetResult {
    matchday: number;
    bets: PlayerBet[];
}