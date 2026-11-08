<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Classify ElevenLabs failures through `src/lib/elevenlabs-voice-error.ts` using provider error codes before HTTP status, because clone-plan restrictions and exhausted quota can both arrive as HTTP 401.
- Keep Speak2Kids curriculum and progression in an isolated module with authenticated child routes and owner-scoped Kids tables; this preserves adult course IDs and progress.
- Use device English speech only when a real voice is available in Speak2Kids; child speaking is explicit self-assessment and drawings stay local.
