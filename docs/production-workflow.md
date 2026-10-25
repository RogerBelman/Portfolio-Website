# Production workflow

This document is the source of truth for routine portfolio releases. Read it together with the current files under `.github/workflows/` before preparing, running, or diagnosing a deployment. If this document and a workflow disagree, the workflow is authoritative and this document should be corrected in the same pull request.

## Principles

- `main` represents the production-ready version of the site.
- All changes begin from the latest `origin/main` on a dedicated branch.
- Changes reach `main` through a reviewed pull request; never push application changes directly to `main`.
- GitHub Actions performs validation and deployment.
- Production deployment requires the repository owner's approval through the protected `production` environment.
- Never commit or print credentials, private keys, server addresses, secret values, or private deployment configuration.
- Do not manually copy files to the server or bypass GitHub Actions unless the repository owner explicitly requests a recovery operation.

## Routine change and release process

1. Fetch the latest remote state and confirm the working tree is clean.
2. Create a dedicated feature branch from the latest `origin/main`.
3. Make the requested change while preserving accessibility and mobile responsiveness.
4. Run the local validation commands:
   ```bash
   npm ci
   npm run lint
   npm run build
   ```
5. Review the complete diff for unintended files, generated output, credentials, and private infrastructure details.
6. Commit the intended files, push the feature branch, and open a pull request against `main`.
7. Stop for the repository owner to review the pull request. Do not merge it on the owner's behalf unless explicitly requested.
8. Confirm the pull-request **CI** workflow passes. It installs dependencies, runs lint, and creates a production build.
9. After the owner squash-merges the pull request, GitHub runs **CI** and **Deploy production** for the new merge commit on `main`.
10. The deployment workflow builds and uploads the production artifact, then waits at the protected `production` environment when approval is required.
11. Stop for the repository owner to approve production deployment. Codex must not claim that approval has occurred until GitHub reports it.
12. After approval, GitHub Actions uploads the artifact through the restricted deployment account, invokes the restricted server-side release command, and verifies the public HTTPS site.
13. Confirm both the `main` CI run and the production deployment run succeeded. Report the deployed merge commit and the live verification result.
14. Local clones do not update automatically. After a successful merge, update a clean local checkout with:
   ```powershell
   git switch main
   git pull --ff-only origin main
   ```

## Human and automated responsibilities

### Codex or developer

- Start from current `origin/main`.
- Create the branch and implementation.
- Run local checks and inspect the diff.
- Commit, push, and open the pull request when requested.
- Inspect GitHub Actions results and explain failures.
- Clearly identify when owner review or production approval is required.

### Repository owner

- Review and merge the pull request.
- Approve the protected production environment.
- Decide whether exceptional recovery or manual server work is authorized.

### GitHub Actions

- Run lint and build checks for pull requests and `main`.
- Build the exact commit being deployed.
- Preserve the build as a short-lived artifact.
- Use repository environment secrets without exposing their values.
- Upload and activate the release through the restricted deployment path.
- Verify the public site over HTTPS.

## Failure handling

- If pull-request CI fails, do not merge. Diagnose the failing check, make the smallest fix on the same feature branch, and rerun validation.
- If the `main` build fails, production deployment must not proceed.
- If deployment is waiting, verify whether it is waiting for the protected environment approval before treating it as a failure.
- If upload, activation, or live verification fails, inspect the failed step and report the evidence. Do not repeatedly rerun, edit secrets, use root access, or deploy manually without explicit authorization.
- Do not report a release as deployed until the **Deploy production** workflow and its live-site verification both succeed.

## Workflow references

- Pull-request and `main` validation: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)
- Production build, approval, deployment, and verification: [`.github/workflows/deploy-production.yml`](../.github/workflows/deploy-production.yml)
