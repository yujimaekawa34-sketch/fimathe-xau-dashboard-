# Future MT5 bridge — security-first outline (not implemented)

## Proposed topology

`iPhone PWA (HTTPS)` ⇄ `authenticated bridge (HTTPS)` ⇄ `Windows VPS agent / MT5 EA`

The EA runs in MT5 on Windows/VPS; the iPhone cannot run the EA natively. The PWA should never receive broker credentials or directly connect to the MT5 terminal.

## API concept (not active)
- `GET /v1/status`: health, heartbeat timestamp, demo/live mode, trading permission, robot state, balance/equity, daily P/L, drawdown, positions, last signal, and event log.
- `POST /v1/commands/pause`: pause new entries.
- `POST /v1/commands/resume`: resume only if all server-side safeguards and operator confirmation pass.
- `POST /v1/commands/flatten`: close positions only after authenticated explicit confirmation; separate privilege and idempotency key.
- `GET /v1/events`: status/events (polling initially; push/WebSocket later).

## Mandatory controls before connecting
- HTTPS, authentication, device/session revocation, short-lived access tokens, secure storage, MFA for account changes.
- Do not allow arbitrary commands or code; strict command allowlist, rate limit, audit log, request nonce/replay prevention.
- EA-side risk limits remain authoritative; bridge loss or stale heartbeat must fail closed (block new entries), but does not assume it can safely close existing positions.
- No broker login/password in the PWA; no unauthenticated port exposed on VPS; network firewall and OS updates.
- Implement and test stop/pause behavior independently at MT5/EAs, not just UI state.
