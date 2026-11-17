const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-Cbj-qQJO.js","assets/src-pU_fyWyz.js","assets/chunk-Y2CYZVJY-Bg_95ya4.js","assets/index-BJqru6Vr.js","assets/index-CieEDsb9.css","assets/chunk-742MDFTN-GzrQ8o5W.js","assets/chunk-O7XYJQB3-Cxb4TgT5.js","assets/chunk-ZIGJFQKS-DLTItLNw.js","assets/dist-Ct2CQMTA.js","assets/chunk-MBY4JIJT-DV29mseE.js","assets/chunk-5DYCD2WN-B-3a7KIy.js","assets/chunk-7INBJB4K-L2hbUWyU.js","assets/chunk-7PRAP22T-DS4AaZjG.js","assets/chunk-J5ZVWO5B-B7BYqhUP.js","assets/rough.esm-Cs8YDIX4.js","assets/chunk-6AEJRKK7-C5cTTMxm.js","assets/chunk-GNY47TPC-DhrUUt22.js","assets/chunk-DUW6YSOI-CaX5BfCt.js","assets/chunk-UA2S7LBM-Bnz_kt23.js","assets/chunk-Z7XXMR3K-BRwPWGin.js","assets/line-DeRSjxOU.js","assets/path-CNO468J-.js","assets/array-DYRGGQae.js","assets/chunk-LNGE3PJU-DPPgykQq.js"])))=>i.map(i=>d[i]);
import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,K as l,L as u,M as d,N as f,O as p,P as m,R as h,S as g,T as _,U as ee,V as v,W as te,b as y,i as b,j as x,k as S,n as C,t as w,w as T,z as E}from"./index-BJqru6Vr.js";var D={extent:[{caption:`End-to-end pipeline: discovery, provisioning, runtime, governance`,code:`flowchart TD
    subgraph Discovery ["1. Discovery & Planning"]
        A["Target Repository"] --> B["extent scan<br/>(Runtime & Framework Detection)"]
        B --> C["extent analyze<br/>(AST, Routes, DB, Queues)"]
        C --> D["extent plan<br/>(Rollout Strategy & Profiles)"]
    end

    subgraph Generation ["2. Provisioning & Instrumentation"]
        E["extent apply<br/>(extent.yaml & LGTM Configs)"]
        E --> F["extent instrument<br/>(OTel Bootstrap Injection)"]
        F --> G["extent deps<br/>(SDK Dependency Sync)"]
    end

    subgraph Runtime ["3. Stack & Verification"]
        H["extent stack up<br/>(Docker Compose LGTM Stack)"]
        H --> I["extent verify / doctor<br/>(Config & Endpoint Checks)"]
        I --> J["extent smoke<br/>(Synthetic Traffic & Correlation)"]
    end

    subgraph Governance ["4. Analysis & Quality"]
        K["extent cardinality<br/>(Loki Label Risk Score)"]
        L["extent score<br/>(Telemetry Quality Rating)"]
        M["extent report / baseline<br/>(Prometheus Bottlenecks & Diff)"]
    end

    D --> E
    G --> H
    J --> K
    J --> L
    J --> M`},{caption:`Extent against the manual alternative`,code:`flowchart LR
    APP["Target App<br/>(OTel Traces / Metrics / Logs)"] -->|"OTLP gRPC:4317 / HTTP:4318"| OTCP["otel-collector.yml<br/>(OTel Collector)"]

    subgraph LGTM ["Local LGTM Stack (docker-compose.observability.yml)"]
        PROM["prometheus.yml<br/>(Prometheus Metrics)"]
        TEMPO["tempo.yml<br/>(Tempo Traces)"]
        LOKI["loki.yml<br/>(Loki Logs)"]
        GRAF["grafana/<br/>(Dashboards & Datasources)"]

        PROM --> GRAF
        TEMPO --> GRAF
        LOKI --> GRAF
    end

    OTCP -->|"Remote Write :9090"| PROM
    OTCP -->|"OTLP Exporter :3200"| TEMPO
    OTCP -->|"Loki Push API :3100"| LOKI

    CLI_VERIFY["extent smoke / verify / report"] -.->|"Query API"| PROM
    CLI_VERIFY -.->|"Query API"| TEMPO
    CLI_VERIFY -.->|"Query API"| LOKI`},{caption:`CLI command and directory surface`,code:`flowchart TD
    CLI["cmd/extent<br/>(CLI Entrypoint & Dispatcher)"]

    subgraph AnalysisLayer ["Analysis & Contract Engine"]
        SCAN["internal/scanner"]
        ANALYZER["internal/analyzer"]
        PLANNER["internal/planner"]
        CONTRACT["internal/contract"]
        CONF["internal/config"]
    end

    subgraph MutationLayer ["Instrumentation & GitOps"]
        INST["internal/instrumenter"]
        DEPS["internal/deps"]
        CODEMOD["internal/codemods"]
        GITOPS["internal/gitops"]
        RECIPES["recipes/"]
    end

    subgraph ProvisioningLayer ["Stack Provisioning & Control"]
        TEMPL["internal/templates"]
        STACK["internal/stack"]
    end

    subgraph VerificationLayer ["Verification & Evidence Engine"]
        VERIFY["internal/verifier"]
        SMOKE["internal/smoke"]
        EVID["internal/evidence"]
        REPORT["internal/reporter"]
        RECOM["internal/recommendations"]
        BASE["internal/baseline"]
        CARD["internal/cardinality"]
        SCORE["internal/scorer"]
    end

    subgraph TargetArtifacts ["Target System & LGTM Stack"]
        TARGET_CODE["Application Source & Dependencies"]
        COMPOSE["docker-compose.observability.yml"]
        COLLECTOR["OTel Collector (OTLP Ingest)"]
        BACKENDS["Prometheus / Tempo / Loki / Grafana"]
    end

    CLI --> SCAN
    CLI --> INST
    CLI --> TEMPL
    CLI --> VERIFY

    SCAN --> ANALYZER
    ANALYZER --> PLANNER
    PLANNER --> CONTRACT
    CONTRACT --> CONF
    CONF --> TEMPL

    INST --> TARGET_CODE
    DEPS --> TARGET_CODE
    CODEMOD --> TARGET_CODE

    TEMPL --> COMPOSE
    STACK --> COMPOSE
    COMPOSE --> COLLECTOR
    COLLECTOR --> BACKENDS

    VERIFY --> TARGET_CODE
    SMOKE --> COLLECTOR
    EVID --> BACKENDS
    REPORT --> BACKENDS`}],telos:[{caption:`System architecture — client, gateway, API, OCR service, and data stores`,code:`graph TD
    Client["Flutter Client (Android / iOS / Web / Desktop)"]
    Gateway["Nginx Gateway / Reverse Proxy (:80, :5000)"]
    Api[".NET 10 Web API (EduScan.Api)"]
    SignalR["SignalR Real-Time Hub (/hubs/chat)"]
    OcrService["OCR Vision Microservice (Python FastAPI / PaddleOCR)"]
    AiTutor["AI Inference Engine (Semantic Kernel / Ollama)"]
    Postgres[("PostgreSQL 16 Database")]
    Minio[("MinIO S3 Object Storage")]
    RedisCache[("Redis Cache")]

    Client -->|HTTP / REST| Gateway
    Client -->|WebSocket| Gateway
    Gateway -->|Forward| Api
    Gateway -->|Stream| SignalR
    SignalR -.-> Api
    Api -->|Persist Metadata| Postgres
    Api -->|Cache & State| RedisCache
    Api -->|Store Scans & Blobs| Minio
    Api -->|Dispatch Ingestion| OcrService
    Api -->|Contextual Prompting| AiTutor`}],zenith:[{caption:`System architecture — telemetry ingestion through to the Flutter client`,code:`graph TD
    Sim["Hardware Devices & Zenith Simulator"] -->|HTTP / Telemetry Ingestion| Api["Zenith Web API (.NET 10)"]
    Api -->|Validate Device Auth| Auth["Device Authentication Service"]
    Api -->|Persist Hypertable Records| Timescale[("TimescaleDB (PostgreSQL)")]
    Api -->|Update Current Site State| Redis[("Redis Distributed Cache")]
    Api -->|Broadcast Telemetry Events| SignalR["SignalR Real-Time Hub (/hubs/telemetry)"]
    SignalR -->|WebSocket Stream| Client["Zenith Flutter Client (Mobile / Web / Desktop)"]
    Client -->|Query Aggregated History| Api`}],fleetpulse:[{caption:`Container view`,code:`flowchart LR
    User[Dispatcher / Fleet Manager / Maintenance Staff]
    Browser[Svelte + Vite Frontend]
    Api[ASP.NET Core API]
    App[Application Services]
    Domain[Domain Model]
    Infra[Infrastructure Repositories]
    Db[(PostgreSQL)]

    User --> Browser
    Browser -->|JWT + JSON over /api| Api
    Api --> App
    Api --> Infra
    App --> Domain
    Infra --> Domain
    Infra -->|EF Core / Npgsql| Db`},{caption:`Clean Architecture dependency rule`,code:`flowchart BT
    Domain[FleetPulse.Domain]
    Application[FleetPulse.Application]
    Infrastructure[FleetPulse.Infrastructure]
    Api[FleetPulse.Api]
    Tests[FleetPulse.Tests]

    Application --> Domain
    Infrastructure --> Domain
    Api --> Application
    Api --> Infrastructure
    Tests --> Api
    Tests --> Application
    Tests --> Infrastructure
    Tests --> Domain`},{caption:`Request pipeline`,code:`sequenceDiagram
    participant Client as Svelte Client
    participant Middleware as ASP.NET Middleware
    participant Controller as API Controller
    participant Service as Application Service
    participant Repo as Repository
    participant Db as PostgreSQL

    Client->>Middleware: HTTP request with Bearer token
    Middleware->>Middleware: Exception handling, CORS, JWT auth
    Middleware->>Controller: Authorized request
    Controller->>Service: Business operation when needed
    Service->>Repo: Query/update domain data
    Repo->>Db: EF Core SQL via Npgsql
    Db-->>Repo: Rows
    Repo-->>Service: Entities / aggregates
    Service-->>Controller: Result model
    Controller-->>Client: JSON DTO response`},{caption:`Authentication and authorization`,code:`sequenceDiagram
    participant User
    participant Frontend
    participant Auth as AuthController
    participant Users as UserRepository
    participant Jwt as JWT Issuer

    User->>Frontend: Submit username/password
    Frontend->>Auth: POST /api/auth/login
    Auth->>Users: Find user by username
    Auth->>Auth: Verify BCrypt password hash
    Auth->>Jwt: Issue signed JWT with role claim
    Auth-->>Frontend: Token + user fields
    Frontend->>Frontend: Store token in localStorage
    Frontend->>Auth: GET /api/auth/me with Bearer token
    Auth-->>Frontend: Current user profile`},{caption:`Frontend runtime architecture`,code:`flowchart TD
    Main[main.ts]
    App[App.svelte]
    Router[lib/router.ts]
    AuthStore[lib/stores/auth.ts]
    UiStore[lib/stores/ui.ts]
    ApiClient[lib/api.ts]
    Pages[pages/*.svelte]
    Components[lib/components/*.svelte]
    Backend[ASP.NET Core API]

    Main --> App
    App --> Router
    App --> AuthStore
    App --> UiStore
    App --> Pages
    Pages --> Components
    Pages --> ApiClient
    AuthStore --> ApiClient
    ApiClient -->|/api through Vite proxy in dev| Backend`},{caption:`Data model`,code:`erDiagram
    DEPOT ||--o{ BUS : houses
    ROUTE ||--o{ BUS : assigned_to
    BUS ||--o{ TRIP : performs
    ROUTE ||--o{ TRIP : serves
    BUS ||--o{ MILEAGE_LOG : records
    BUS ||--o{ BUS_COMPONENT : owns
    BUS ||--o{ MAINTENANCE_RECORD : receives
    BUS_COMPONENT ||--o{ MAINTENANCE_RECORD : serviced_by
    BUS ||--o{ ALERT : triggers
    BUS_COMPONENT ||--o{ ALERT : triggers
    USER ||--o{ ALERT : resolves

    DEPOT {
        uuid Id
        string Name
        string Location
        int Capacity
    }

    BUS {
        uuid Id
        string BusNumber
        string PlateNumber
        string Model
        int Year
        string CurrentStatus
        double TotalMileage
    }

    ROUTE {
        uuid Id
        string Name
        string StartPoint
        string Destination
        jsonb Stops
        double DistanceKm
        bool IsActive
    }

    BUS_COMPONENT {
        uuid Id
        string ComponentType
        double CurrentConditionScore
        double FailureProbability
        string Status
    }

    MAINTENANCE_RECORD {
        uuid Id
        string Type
        string Description
        decimal Cost
        datetime PerformedAt
    }

    ALERT {
        uuid Id
        string Type
        string Severity
        string Title
        bool IsRead
        bool IsResolved
    }

    USER {
        uuid Id
        string Username
        string Email
        string Role
        bool IsActive
    }`},{caption:`Dashboard load sequence`,code:`sequenceDiagram
    participant UI as Dashboard.svelte
    participant Api as api.ts
    participant Backend as ASP.NET Core API
    participant Db as PostgreSQL

    UI->>Api: getDashboardStats()
    UI->>Api: getBuses()
    UI->>Api: getRoutes()
    UI->>Api: getTrips()
    UI->>Api: getAlerts(resolved=false)
    UI->>Api: getCriticalComponents()
    UI->>Api: getMileageTrends()
    Api->>Backend: Parallel /api requests
    Backend->>Db: Aggregate and resource queries
    Db-->>Backend: Fleet data
    Backend-->>Api: JSON DTOs
    Api-->>UI: Typed data
    UI->>UI: Render stat cards, charts, alerts, component list`},{caption:`Alert generation and resolution`,code:`flowchart TD
    Trigger[User clicks Generate Alerts]
    Endpoint[POST /api/alerts/generate]
    AlertService[AlertService]
    Repos[Bus, Component, Maintenance Repositories]
    Rules{Evaluate rules}
    Persist[Persist generated alerts]
    UIRefresh[Refresh alert list and stats]

    Trigger --> Endpoint
    Endpoint --> AlertService
    AlertService --> Repos
    Repos --> Rules
    Rules -->|replacement due| Persist
    Rules -->|overdue maintenance| Persist
    Rules -->|abnormal mileage| Persist
    Rules -->|idle bus / repeated failure| Persist
    Persist --> UIRefresh`},{caption:`Component health model`,code:`flowchart LR
    Mileage[Mileage since install]
    Time[Age in months]
    Condition[Manual condition score]
    Health[Component health score]
    Probability[Failure probability]
    Forecast[Estimated replacement date]
    Alerts[Replacement alert]

    Mileage --> Health
    Time --> Health
    Condition --> Health
    Health --> Probability
    Probability --> Forecast
    Forecast --> Alerts`}],"page-ui":[{caption:`Runtime / container topology (docker compose)`,code:`graph TD
U[Browser] --> N[Nginx :80]

N --> API[auth-service<br/>Page.Ui.Presentation :8080]
N --> R[svelte-render<br/>Page.Ui.SvelteRender :8080<br/>via /runs/*]
N --> M[minio :9000<br/>via /minio/*]

API --> PG[(PostgreSQL 17)]
API --> RD[(Redis)]
API --> MQ[(RabbitMQ)]
API --> M
API --> DP[(RSA/DataProtection keys volumes)]

W[worker-ai<br/>Page.Ui.Worker.Ai] --> PG
W --> RD
W --> MQ
W --> R

MQ --> W
MQ --> API
R --> SB[svelte-render-sandbox<br/>Node.js :4000]
R --> RUNS[(render runs/result cache)]
CB[create-bucket init job] --> M`},{caption:`Edge routing and protocols (Nginx)`,code:`sequenceDiagram
participant U as Browser
participant N as Nginx (:80)
participant API as auth-service (:8080)
participant R as svelte-render (:8080)
participant M as minio (:9000)

U->>N: POST /graphql/ (queries + mutations)
N->>API: proxy_pass
API-->>U: JSON

U->>N: WS /graphql (subscriptions)
N->>API: proxy_pass + Upgrade
API-->>U: subscription events

U->>N: WS /hubs/chat (SignalR)
N->>API: proxy_pass + Upgrade
API-->>U: hub events

U->>N: GET /api/upload/presign?fileName=...
N->>API: proxy_pass
API-->>U: uploadUrl + downloadUrl (presigned)

U->>N: PUT /minio/chat-uploads/userId/objectKey?X-Amz-...
N->>M: proxy_pass /minio/*
M-->>U: 200/204

U->>N: GET /runs/publicRunToken/preview.html
N->>R: proxy_pass /runs/*
R-->>U: static HTML/CSS/JS`},{caption:`auth-service (Page.Ui.Presentation) components`,code:`graph TB
subgraph API[auth-service]
GQL[HotChocolate GraphQL\\nqueries/mutations/subscriptions]
WS[GraphQL WS auth\\nChatSocketSessionInterceptor]
HUB[SignalR ChatHub\\n/hubs/chat]
UP[UploadController\\n/api/upload/presign]
AUTH[Identity + JWT auth]
CHAT[ChatService\\nrate limits + createChat lock]
AUTHSVC[AuthService]
MAIL[AuthEmailRequested consumer]
RTC[Realtime consumers\\nChatMessageCreated + AiResponseMessageGenerated]
OUTBOX[EF bus outbox]
end

subgraph State
PG[(PostgreSQL)]
RD[(Redis)]
MQ[(RabbitMQ)]
M[(MinIO chat-uploads)]
end

GQL --> CHAT
GQL --> AUTHSVC
GQL --> AUTH
WS --> AUTH
UP --> RD
UP --> M
CHAT --> PG
CHAT --> RD
CHAT --> M
CHAT --> OUTBOX
AUTH --> PG
AUTHSVC --> PG
MAIL --> MQ
HUB <--> RD
GQL <--> RD
OUTBOX --> PG
RTC --> PG
RTC <--> MQ
RTC --> HUB
RTC --> GQL`},{caption:`Chat and AI render flow`,code:`sequenceDiagram
participant U as User
participant API as auth-service
participant RD as Redis
participant DB as PostgreSQL
participant MQ as RabbitMQ
participant RT as Realtime consumers
participant W as worker-ai
participant R as svelte-render

U->>API: createChat(input + initialUserMessage)
API->>RD: write-rate limit + distributed createChat lock
API->>DB: Begin transaction
API->>DB: Insert Chat with OwnerUserId
API->>DB: Insert initial Message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated after commit
MQ->>RT: Broadcast initial message
MQ->>W: Consume ChatMessageCreated
W->>RD: short AI rate limit
W->>R: POST /api/render
R-->>W: previewUrl or render error
W-->>MQ: Publish AiResponseMessageGenerated
MQ->>API: Consume AiResponseMessageGenerated
API->>DB: Insert AI/system message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated (AI/system)
MQ->>RT: Broadcast AI/system message
API-->>U: createChat payload (new chatId + chatKey each call)

U->>API: createMessage(chatKey, content, attachmentUrl?)
API->>RD: write-rate limit
API->>DB: Insert Message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated after commit
MQ->>RT: Broadcast message
MQ->>W: Consume ChatMessageCreated
W->>RD: short AI rate limit
W->>R: POST /api/render
R-->>W: previewUrl or render error
W-->>MQ: Publish AiResponseMessageGenerated
MQ->>API: Consume AiResponseMessageGenerated
API->>DB: Insert AI/system message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated (AI/system)
MQ->>RT: Broadcast AI/system message

U->>API: createMessage(chatKey, content, clientRequestId?)
API->>DB: Insert USER_MESSAGE + outbox rows
DB-->>MQ: Deliver ChatMessageCreated
MQ->>W: Consume ChatMessageCreated
W->>AI: POST generate with signed internal JWT
AI->>API: GET /api/ai-dev/upload/presign
AI->>M: PUT generated files to ai-runs via presigned URLs
AI->>API: createMessage / renameChat callbacks with internal JWT
AI->>API: POST /api/ai-dev/render-trigger
API->>MQ: Publish TriggerAiRunRender
MQ->>W: Consume TriggerAiRunRender
W->>R: POST /api/render with X-Render-Api-Key
R-->>W: opaque public preview link
W-->>MQ: Publish AI_RUN
MQ->>API: Persist + rebroadcast`},{caption:`Auth email delivery flow`,code:`sequenceDiagram
participant U as User
participant API as auth-service
participant DB as PostgreSQL
participant MQ as RabbitMQ
participant MAIL as auth email consumer
participant SMTP as SMTP provider

U->>API: register / forgotPassword / resendVerification
API->>API: Validate input + apply Redis rate limits
API->>DB: Persist auth state + outbox rows
DB-->>MQ: Deliver AuthEmailRequested after commit
API-->>U: success response
MQ->>MAIL: Consume AuthEmailRequested
MAIL->>SMTP: Connect + authenticate + send
SMTP-->>MAIL: delivery result / retry`},{caption:`Attachment upload and message validation`,code:`sequenceDiagram
participant U as User
participant API as auth-service
participant M as MinIO
participant DB as PostgreSQL
participant MQ as RabbitMQ
participant RT as Realtime consumers

U->>API: GET /api/upload/presign?fileName=photo.png
API->>API: Validate filename + rate limit
API->>M: Ensure bucket exists on first use
API-->>U: uploadUrl + downloadUrl (signed for user folder)

U->>M: PUT uploadUrl (image bytes)
M-->>U: 200/204

U->>API: createMessage(..., attachmentUrl=downloadUrl)
API->>API: Validate attachment URL format
API->>M: StatObject(chat-uploads/userId/objectKey)
API->>DB: Save message (stores stable path without query)
API->>MQ: Publish ChatMessageCreated
MQ->>RT: Broadcast message with attachmentUrl`},{caption:`Render service internals (Page.Ui.SvelteRender)`,code:`graph TB
subgraph R[svelte-render]
AuthMW[API key middleware\\nX-Render-Api-Key]
RC[RenderController\\nPOST /api/render]
RF[RenderController\\nPOST /api/render-form]
Hash[SHA-256 input hash -> runId]
Cache[result.json cache by runId]
RS[SandboxRenderService]
Static[Static files\\nGET /runs/*]
Runs[Runs directory\\nNodeWorker/runs/runId]
end

subgraph Sandbox[Isolated Node Sandbox]
Worker[runner.js TCP Server :4000]
Svelte[Pre-warmed Svelte Compiler/SSR]
Temp[tmpfs /render_jobs]
end

AuthMW --> RC
AuthMW --> RF
RC --> Hash --> Cache
RF --> Hash
RC --> RS
RF --> RS
RS -- TCP Protocol --> Worker
Worker --> Svelte
Worker --> Temp
RS -- Copy Artifacts --> Runs
Static --> Runs`},{caption:`Project layers and dependencies`,code:`graph BT
Domain[Page.Ui.Domain]
App[Page.Ui.Application] --> Domain
Infra[Page.Ui.Infrastructure] --> App
Infra --> Domain
Pres[Page.Ui.Presentation] --> App
Pres --> Infra
Worker[Page.Ui.Worker.Ai] --> App
Worker --> Infra
Render[Page.Ui.SvelteRender]`}],mirox:[{caption:`System architecture — MVVM view models through to the HTML preview pipeline`,code:`graph TD
    UI["Avalonia Presentation Layer (Mirox.Presentation.Avalonia)"]
    Editor["AvaloniaEdit Buffer"]
    WebView["Native WebView (WebView2 / WebKit)"]
    App["Application Layer (Mirox.Application)"]
    Infra["Infrastructure Layer (Mirox.Infrastructure)"]
    Core["Domain Core (Mirox.Core)"]

    UI --> Editor
    UI --> WebView
    UI --> App
    App --> Core
    App --> Infra
    Infra --> Core
    Infra --> Markdig["Markdig Pipeline (GFM + Extensions)"]
    Infra --> ReverseMD["ReverseMarkdown (HTML to Markdown)"]
    Infra --> FileIO["Local File System & Settings Storage"]`}],confine:[{caption:`Spatial codebase indexing, squarified 2D/3D layout, and Focus Mode pipeline`,code:`flowchart TD
    FS["Target Local Workspace"] --> PAR["Parallel Indexer & Static Analyzer"]
    PAR --> SYM["SLOC, Bytes, Symbols, Imports, Calls"]
    SYM --> TREE["Nested Squarified 2D/3D Treemap Layout"]
    TREE --> GL["WebGL2 Instanced Geometry (LOD 0 / LOD 1)"]
    TREE --> C2D["HiDPI Canvas 2D Overlay & LOD 2 Source"]
    C2D --> FOCUS["Focus Mode Source Card + Blur Pyramid"]
    SYM --> SEARCH["In-Memory Line & Path Search (<10 ms)"]
    SYM --> DOCS["Markdowns & AI Context File Subtab"]`}],resolute:[{caption:`Deterministic audit engine, scanner adapters, and PolicyGate verification`,code:`flowchart TD
    TGT["Target Repository"] --> DET["Python AST, JS/TS & Secret Analyzers"]
    TGT --> EXT["bandit, semgrep, gitleaks & osv-scanner"]
    TGT --> REPO["Repository Hygiene Checks (Routes, Lockfiles, Hooks)"]
    DET --> MAP["CWE + OWASP ASVS 5.0 Mapping"]
    EXT --> COV["Evidence Coverage Calculator"]
    REPO --> MAP
    MAP --> PG["PolicyGate (PASS / REVIEW / FAIL / REJECT)"]
    COV --> PG
    TGT -->|"Post-Scan Integrity Re-Hash"| PG
    PG --> OUT["SARIF 2.1.0 + HMAC Hash-Chained Audit Log"]
    ADV["Advisory Laya Model (AUROC 0.52)"] -.->|"Non-Binding (--advisory)"| OUT`}],agentgrep:[{caption:`Bounded hybrid code retrieval (Okapi BM25 + In-Process ONNX / kev-0.8b Reranking)`,code:`flowchart TD
    Q["User Query & Repo Root"] --> BM25["Stage 1: Okapi BM25 Lexical Ranking (k1=1.5, b=0.75)"]
    BM25 --> PRUNE["laya-adapter: NON_SOURCE_DIRS Pruning & Offset-0 Snippets"]
    PRUNE --> ONNX["Stage 2: In-Process @receptron/laya ONNX (421M ModernBERT-large)"]
    PRUNE --> KEV["Optional GPU Reranker (kev-0.8b)"]
    ONNX --> FUSE["Calibrated Lexical-Neural Rank Fusion"]
    KEV --> FUSE
    FUSE --> HOLDOUT["Frozen SHA-256 Holdout Evaluator + Bootstrap CIs"]`}]},O={dijkstra:[{src:`/media/dijkstra/dijkstra-visualization.gif`,alt:`Looping Manim animation of the graph expanding as Dijkstra settles each node`}]};function ne(e){return D[e]??[]}function k(e){return O[e]??[]}var re=x(`<p class="text-[11px] text-[var(--ink-muted)] font-mono break-words"> </p>`),A=x(`<div class="diagram-body-status diagram-body-overlay svelte-1ua23jv"><p class="text-xs text-[var(--ink-secondary)] font-mono">Diagram could not be rendered — source below</p> <!></div>`),ie=x(`<div class="diagram-body-status diagram-body-overlay svelte-1ua23jv"><span class="diagram-spinner svelte-1ua23jv" aria-hidden="true"></span> <span class="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)]">Rendering diagram</span></div>`),j=x(`<div class="diagram-toolbar svelte-1ua23jv"><span class="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)]"> </span> <div class="flex items-center gap-1.5"><button type="button" class="diagram-tool svelte-1ua23jv">-</button> <span class="diagram-zoom svelte-1ua23jv"> </span> <button type="button" class="diagram-tool svelte-1ua23jv">+</button> <button type="button" class="diagram-tool svelte-1ua23jv">Fit</button></div></div>`),M=x(`<pre class="diagram-source svelte-1ua23jv"><code> </code></pre>`),N=x(`<figure class="diagram-frame svelte-1ua23jv"><figcaption class="diagram-caption svelte-1ua23jv"><span class="diagram-fig svelte-1ua23jv"> </span> <span class="diagram-caption-text svelte-1ua23jv"> </span></figcaption> <div><div></div> <!></div> <!> <button type="button" class="diagram-source-toggle svelte-1ua23jv"> </button> <!></figure>`);function ae(r,i){te(i,!0);let o=v(void 0),d=v(void 0),m=v(`idle`),y=v(``),b=v(!1),x=v(1),C=v(0),D=v(0),O=0,ne=.35,k=s(()=>a(C)>900),ae=s(()=>Math.round(a(C)*a(x))),P=s(()=>Math.round(a(D)*a(x))),F=v(0),I=v(1);function L(e){return Math.min(4,Math.max(ne,Math.round(e*100)/100))}let oe=s(()=>a(m)===`ok`&&(a(k)||a(ae)>a(F)||a(P)>520)),se=Math.random().toString(36).slice(2,9),R=null,z=!1;async function B(){try{if(await new Promise(e=>setTimeout(e,0)),R||=(await w(()=>import(`./mermaid.core-Cbj-qQJO.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))).default,z)return;t(m,`idle`);let e=document.documentElement.classList.contains(`dark-mode`);R.initialize({startOnLoad:!1,securityLevel:`strict`,theme:`base`,fontFamily:`JetBrains Mono, ui-monospace, monospace`,themeVariables:e?{background:`transparent`,primaryColor:`#222227`,primaryTextColor:`#f4f1ea`,primaryBorderColor:`#f4f1ea`,lineColor:`#c8c4ba`,secondaryColor:`#2a2a30`,tertiaryColor:`#1a1a1e`,textColor:`#f4f1ea`,noteBkgColor:`#222227`,noteTextColor:`#f4f1ea`,noteBorderColor:`#f4f1ea`,actorBkg:`#1a1a1e`,actorBorder:`#f4f1ea`,actorTextColor:`#f4f1ea`,signalColor:`#f4f1ea`,signalTextColor:`#f4f1ea`,labelBoxBkgColor:`#222227`,labelTextColor:`#f4f1ea`,loopTextColor:`#f4f1ea`,activationBkgColor:`#2a2a30`,activationBorderColor:`#f4f1ea`,sequenceNumberColor:`#131315`,attributeBackgroundColorOdd:`#1a1a1e`,attributeBackgroundColorEven:`#222227`}:{background:`transparent`,primaryColor:`#f4f1ea`,primaryTextColor:`#111111`,primaryBorderColor:`#111111`,lineColor:`#111111`,secondaryColor:`#eae5da`,tertiaryColor:`#faf8f3`,textColor:`#111111`,noteBkgColor:`#f4f1ea`,noteTextColor:`#111111`,noteBorderColor:`#111111`,actorBkg:`#faf8f3`,actorBorder:`#111111`,actorTextColor:`#111111`,signalColor:`#111111`,signalTextColor:`#111111`,labelBoxBkgColor:`#f4f1ea`,labelTextColor:`#111111`,loopTextColor:`#111111`,activationBkgColor:`#eae5da`,activationBorderColor:`#111111`,sequenceNumberColor:`#faf8f3`,attributeBackgroundColorOdd:`#faf8f3`,attributeBackgroundColorEven:`#f4f1ea`}}),O+=1;let{svg:n}=await R.render(`mmd-${se}-${i.index}-${O}`,i.diagram.code);if(z)return;if(!a(o)){t(m,`error`),t(y,`render target missing`);return}a(o).innerHTML=n;let r=a(o).querySelector(`svg`);if(r){r.removeAttribute(`width`),r.removeAttribute(`height`),r.style.background=`transparent`;let e=r.getAttribute(`viewBox`);if(e){let n=e.split(/\s+/).map(Number);Number.isFinite(n[2])&&n[2]>0&&t(C,Math.round(n[2]),!0),Number.isFinite(n[3])&&n[3]>0&&t(D,Math.round(n[3]),!0)}r.style.maxWidth=`none`;let n=a(o).parentElement;if(n){let e=getComputedStyle(n),r=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight);if(r>0&&a(C)>r){let e=r/a(C);t(I,Math.max(ne,Math.floor(e*20)/20),!0)}else t(I,1);t(x,a(I),!0)}}t(m,`ok`)}catch(e){console.error(`mermaid render failed`,e),t(y,e instanceof Error?`${e.name}: ${e.message}`:String(e),!0),t(m,`error`)}}g(()=>{B();let e=document.documentElement,n=new MutationObserver(()=>{a(m)===`ok`&&B()});n.observe(e,{attributes:!0,attributeFilter:[`class`]}),u(()=>{if(a(m)!==`ok`||!a(o))return;let e=a(o).querySelector(`svg`);!e||!a(C)||!a(D)||(e.style.width=`${a(ae)}px`,e.style.height=`${a(P)}px`)});let r;return a(d)&&(t(F,a(d).clientWidth,!0),r=new ResizeObserver(()=>{t(F,a(d)?a(d).clientWidth:0,!0)}),r.observe(a(d))),()=>{z=!0,n.disconnect(),r?.disconnect()}});var V=N(),H=h(V),U=h(H),ce=h(U);l(U);var W=E(U,2),le=h(W,!0);l(W),l(H);var G=E(H,2);let K;var q=h(G);let ue;n(q,e=>t(o,e),()=>a(o));var J=E(q,2),de=t=>{var n=A(),r=E(h(n),2),i=t=>{var n=re(),r=h(n,!0);l(n),c(()=>S(r,a(y))),e(t,n)};p(r,e=>{a(y)&&e(i)}),l(n),e(t,n)},Y=t=>{e(t,ie())};p(J,e=>{a(m)===`error`?e(de):a(m)!==`ok`&&e(Y,1)}),l(G),n(G,e=>t(d,e),()=>a(d));var X=E(G,2),fe=n=>{var r=j(),i=h(r),o=h(i,!0);l(i);var s=E(i,2),u=h(s),d=E(u,2),p=h(d);l(d);var m=E(d,2),g=E(m,2);l(s),l(r),c(e=>{S(o,a(k)?`Scroll to pan`:`Fit to width`),S(p,`${e??``}%`)},[()=>Math.round(a(x)*100)]),f(`click`,u,()=>t(x,L(a(x)/1.25),!0)),f(`click`,m,()=>t(x,L(a(x)*1.25),!0)),f(`click`,g,()=>t(x,a(I),!0)),e(n,r)};p(X,e=>{a(m)===`ok`&&e(fe)});var Z=E(X,2),pe=h(Z,!0);l(Z);var me=E(Z,2),Q=t=>{var n=M(),r=h(n),a=h(r,!0);l(r),l(n),c(()=>S(a,i.diagram.code)),e(t,n)};p(me,e=>{a(b)&&e(Q)}),l(V),c(e=>{S(ce,`FIG ${e??``}`),S(le,i.diagram.caption),K=_(G,1,`diagram-body svelte-1ua23jv`,null,K,{"diagram-body-scroll":a(oe)}),ue=_(q,1,`diagram-canvas svelte-1ua23jv`,null,ue,{"diagram-canvas-pending":a(m)!==`ok`}),T(Z,`aria-expanded`,a(b)),S(pe,a(b)?`[-] Hide Mermaid Source`:`[+] View Mermaid Source`)},[()=>String(i.index+1).padStart(2,`0`)]),f(`click`,Z,()=>t(b,!a(b))),e(r,V),ee()}d([`click`]);var P=x(`<span> </span>`),F=x(`<li class="flex gap-3 text-sm leading-relaxed text-[var(--ink-secondary)]"><span class="font-mono font-bold text-[var(--signal-text)] shrink-0" aria-hidden="true">-</span> <span> </span></li>`),I=x(`<div class="py-2.5 first:pt-0 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5"><dt class="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] shrink-0 sm:w-44"> </dt> <dd class="text-sm text-[var(--ink)] break-words sm:text-right sm:flex-1"> </dd></div>`),L=x(`<figure class="shot svelte-1yt4zsb"><img loading="lazy" decoding="async" class="svelte-1yt4zsb"/> <figcaption class="shot-caption svelte-1yt4zsb"> </figcaption></figure>`),oe=x(`<section class="space-y-4 border-b border-[var(--border-subtle)] pb-8"><h2 class="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">Motion Preview</h2> <div class="grid gap-3"></div></section>`),se=x(`<section class="space-y-4 border-b border-[var(--border-subtle)] pb-8"><div class="flex flex-wrap items-baseline justify-between gap-2"><h2 class="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]"> </h2> <span class="font-mono text-[11px] text-[var(--ink-muted)]">Rendered from README source</span></div> <div class="space-y-6"></div></section>`),R=x(`<button type="button" class="inline-flex min-h-[44px] w-full sm:w-auto justify-center items-center gap-2 border border-[var(--ink)] bg-[var(--paper-elevated)] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors cursor-pointer"> </button>`),z=x(`<div class="w-full max-w-4xl mx-auto space-y-10"><button type="button" class="inline-flex min-h-[40px] items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink-secondary)] hover:text-[var(--signal-text)] transition-colors cursor-pointer">&lt;- Overview</button> <header class="space-y-4 border-b border-[var(--ink)] pb-8"><div class="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider"><span class="font-semibold text-[var(--signal-text)]"> </span> <span class="text-[var(--ink-muted)]"> </span></div> <h1 class="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.06] text-[var(--ink)] break-words"> <span class="text-[var(--signal)]">.</span></h1> <p class="max-w-[65ch] text-base leading-relaxed text-[var(--ink-secondary)]"> </p> <div class="flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono text-xs text-[var(--ink-muted)]"></div></header> <section class="grid gap-4 md:grid-cols-[200px_1fr] border-b border-[var(--border-subtle)] pb-8"><h2 class="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">Overview</h2> <p class="max-w-[65ch] text-[15px] leading-[1.72] text-[var(--ink-secondary)]"> </p></section> <section class="grid gap-4 md:grid-cols-[200px_1fr] border-b border-[var(--border-subtle)] pb-8"><h2 class="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">Capabilities</h2> <ul class="space-y-2.5"></ul></section> <section class="grid gap-4 md:grid-cols-[200px_1fr] border-b border-[var(--border-subtle)] pb-8"><h2 class="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">Architecture</h2> <dl class="divide-y divide-[var(--border-subtle)]"></dl></section> <!> <!> <section class="grid gap-4 md:grid-cols-[200px_1fr] pb-4"><h2 class="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">Repository</h2> <div class="space-y-2"><div class="flex flex-wrap items-center justify-between gap-3"><span> </span> <a target="_blank" rel="noopener noreferrer" class="font-mono text-xs font-semibold text-[var(--ink)] hover:text-[var(--signal-text)] transition-colors break-words"> </a></div> <p class="text-xs leading-relaxed text-[var(--ink-secondary)]"> </p></div></section> <div class="flex flex-col sm:flex-row gap-3 pt-2"><button type="button" class="inline-flex min-h-[44px] w-full sm:w-auto justify-center items-center gap-2 bg-[var(--signal)] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#111111] hover:opacity-90 transition-opacity cursor-pointer">&lt;- Back to All Projects</button> <!> <a target="_blank" rel="noopener noreferrer" class="inline-flex min-h-[44px] w-full sm:w-auto justify-center items-center gap-2 border border-[var(--ink)] bg-[var(--paper-elevated)] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors">Open Source Portal -&gt;</a></div></div>`);function B(n,d){te(d,!0);let g=v(``),x=v(!1),w=s(()=>ne(d.project.slug)),D=s(()=>k(d.project.slug)),O=s(()=>y(d.project.slug));u(()=>{t(g,d.project.title,!0),t(x,!1)});function re(){a(x)||(t(x,!0),C(d.project.title,e=>{t(g,e,!0)}))}var A=z(),ie=h(A),j=E(ie,2),M=h(j),N=h(M),B=h(N,!0);l(N);var V=E(N,2),H=h(V,!0);l(V),l(M);var U=E(M,2),ce=h(U,!0);o(),l(U);var W=E(U,2),le=h(W,!0);l(W);var G=E(W,2);i(G,21,()=>d.project.tags,r,(t,n)=>{var r=P(),i=h(r);l(r),c(()=>S(i,`#${a(n)??``}`)),e(t,r)}),l(G),l(j);var K=E(j,2),q=E(h(K),2),ue=h(q,!0);l(q),l(K);var J=E(K,2),de=E(h(J),2);i(de,21,()=>d.project.capabilities,r,(t,n)=>{var r=F(),i=E(h(r),2),o=h(i,!0);l(i),l(r),c(()=>S(o,a(n))),e(t,r)}),l(de),l(J);var Y=E(J,2),X=E(h(Y),2);i(X,21,()=>d.project.architecture,r,(t,n)=>{var r=I(),i=h(r),o=h(i,!0);l(i);var s=E(i,2),u=h(s,!0);l(s),l(r),c(()=>{S(o,a(n).label),S(u,a(n).value)}),e(t,r)}),l(X),l(Y);var fe=E(Y,2),Z=t=>{var n=oe(),o=E(h(n),2);i(o,21,()=>a(D),r,(t,n)=>{var r=L(),i=h(r),o=E(i,2),s=h(o,!0);l(o),l(r),c(()=>{T(i,`src`,a(n).src),T(i,`alt`,a(n).alt),S(s,a(n).alt)}),e(t,r)}),l(o),l(n),e(t,n)};p(fe,e=>{a(D).length>0&&e(Z)});var pe=E(fe,2),me=t=>{var n=se(),s=h(n),u=h(s),d=h(u);l(u),o(2),l(s);var f=E(s,2);i(f,21,()=>a(w),r,(e,t,n)=>{ae(e,{get diagram(){return a(t)},index:n})}),l(f),l(n),c(()=>S(d,`Architecture Diagrams (${a(w).length??``})`)),e(t,n)};p(pe,e=>{a(w).length>0&&e(me)});var Q=E(pe,2),he=E(h(Q),2),ge=h(he),$=h(ge),_e=h($,!0);l($);var ve=E($,2),ye=h(ve);l(ve),l(ge);var be=E(ge,2),xe=h(be,!0);l(be),l(he),l(Q);var Se=E(Q,2),Ce=h(Se),we=E(Ce,2),Te=t=>{var n=R(),r=h(n);l(n),c(()=>S(r,`Related Blog Posts (${a(O).length??``}) ->`)),f(`click`,n,()=>b(d.project.slug)),e(t,n)};p(we,e=>{a(O).length>0&&e(Te)});var Ee=E(we,2);l(Se),l(A),c(e=>{S(B,d.project.type),S(H,d.project.repo.public?`PUBLIC REPOSITORY`:`PRIVATE ARCHIVE`),S(ce,a(g)),S(le,d.project.description),S(ue,d.project.overview),_($,1,`font-mono text-xs font-bold uppercase tracking-wider ${d.project.repo.public?`text-[var(--signal-text)]`:`text-[var(--ink-muted)]`}`),S(_e,d.project.repo.public?`Public · Source Available`:`Private · Not Published`),T(ve,`href`,d.project.repo.url),S(ye,`${e??``} ->`),S(xe,d.project.repo.note),T(Ee,`href`,d.project.link)},[()=>d.project.repo.url.replace(`https://`,``)]),f(`click`,ie,function(...e){d.onback?.apply(this,e)}),m(`mouseenter`,U,re),m(`mouseleave`,U,()=>t(g,d.project.title,!0)),f(`click`,Ce,function(...e){d.onback?.apply(this,e)}),e(n,A),ee()}d([`click`]);export{B as default};