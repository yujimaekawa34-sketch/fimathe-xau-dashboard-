# Fimathe/XAUUSD research ledger — initial public-source review

Date reviewed: 2026-11-24

## Sources accessed (not a complete course review)
1. **Search result transcript for “O QUE É e COMO FUNCIONA a TÉCNICA FIMATHE na Prática? - Trade para Iniciantes [Aula 14] | FOREX | MARCELO FERREIRA - FIMATHE”** — transcript snippet accessed via PickScribe. It describes channel-reference lines, a neutral zone, using channel continuation/replication, and rule-based entry/exit, but the full video itself was not independently watched. https://pickscribe.com/ru/v/WKvPofQbS3Y
2. **FIMATHE 4.0 “Mapping Negotiation Points in Trading” (Scribd transcription/snippet)** — publicly surfaced text says weekly marks/channel and neutral zone, with channel-width discretion and 50%/100% levels. This is third-party text, not authenticated official source, and may be incomplete. https://www.scribd.com/document/953549659/FIMATHE-4-0
3. **Portal Fimathe** — public site snippet identifies the method, XAU/USD, and claims daily live sessions; site content is promotional, not independent evidence of efficacy. https://portalfimathe.com/

## Preliminary evidence / interpretation / unknowns
- **Evidence from accessed snippets:** The method uses chart markings/reference channels, a neutral zone, context/trend, and predefined entry/exit rules. Some descriptions mention channel percentages (50%, 100%) and avoiding entries in a neutral region until a defined break/return condition.
- **Interpretation for a testable EA (not a source-confirmed exact rule):** Represent channel top/bottom/midpoint and a neutral-zone band as explicit price levels; define a higher timeframe context and lower timeframe trigger; only enter when a closed candle confirms the trigger; place stop at an invalidation point; size the position by risk budget.
- **Not verified / gaps:** Exact official marking process; whether candle body or wick is mandatory; definitions of phases, subcycles, M, surfada, costurada; exact setup trigger, target hierarchy, stop movement, session time, sideways-market filter; exact exception handling and trade-count constraints. Do not code these as “official” rules without more source material.

## Prototype rule set to backtest only (hypothesis)
- Instrument: XAUUSD; context: H1/M15; trigger: M5.
- Mark a recent confirmed context range/channel on the context timeframe; calculate midpoint and neutral zone. Avoid entries inside the neutral zone.
- Require directional context plus a closed M5 confirmation at/after a predefined zone boundary/retest; no tick-based signal to avoid intrabar ambiguity.
- Fixed SL at setup invalidation and target at a predefined channel extension; risk sizing from account equity, SL distance, tick value/size, and broker volume step.
- Guardrails: 0.5% risk/trade default for testing, max 2 entries/day, daily loss stop 1.5%, max spread 20 points (adjust after symbol specification), no grid, no martingale, no averaging down, one position at a time. These are safety-oriented test assumptions, not source rules.

## Required validation
- MT5 Strategy Tester with real ticks where available; at least several distinct market regimes and out-of-sample period.
- Include spread, commission, swaps, slippage, latency sensitivity; compare 15/20/30-point spread thresholds and realistic slippage scenarios.
- Report trade count, expectancy/R, profit factor, max drawdown, consecutive losses, time-in-market, and sensitivity/overfit checks.
- Demo forward test before considering any real-money use. No profitability promise.
