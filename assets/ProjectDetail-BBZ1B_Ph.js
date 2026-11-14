const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-Dkj5CZGg.js","assets/src-pU_fyWyz.js","assets/chunk-Y2CYZVJY-Bg_95ya4.js","assets/index-Cjjd_8Vj.js","assets/index-CG6PXDg7.css","assets/chunk-742MDFTN-CjTq8YJN.js","assets/chunk-O7XYJQB3-CsGafGQZ.js","assets/chunk-ZIGJFQKS-CL5ZF-NG.js","assets/dist-Ct2CQMTA.js","assets/chunk-MBY4JIJT-z4KK1xqI.js","assets/chunk-5DYCD2WN-C2eIssTO.js","assets/chunk-7INBJB4K-DSsDfIFi.js","assets/chunk-7PRAP22T-DVf9Eftp.js","assets/chunk-J5ZVWO5B-B7BYqhUP.js","assets/rough.esm-Cs8YDIX4.js","assets/chunk-6AEJRKK7-AevZtCcv.js","assets/chunk-GNY47TPC-UAlgTS6O.js","assets/chunk-DUW6YSOI-CaX5BfCt.js","assets/chunk-UA2S7LBM-D_wq2mgq.js","assets/chunk-Z7XXMR3K-UHvfGqGq.js","assets/line-kZGpZU0M.js","assets/path-CNO468J-.js","assets/array-DYRGGQae.js","assets/chunk-LNGE3PJU-DPPgykQq.js"])))=>i.map(i=>d[i]);
import{C as e,E as t,S as n,T as r,_ as i,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as ee,w as te,x as S,y as C}from"./index-Cjjd_8Vj.js";var w={extent:[{caption:`End-to-end pipeline: discovery, provisioning, runtime, governance`,code:`flowchart TD
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
    Infra --> FileIO["Local File System & Settings Storage"]`}]},T={dijkstra:[{src:`/media/dijkstra/dijkstra-visualization.gif`,alt:`Looping Manim animation of the graph expanding as Dijkstra settles each node`}]};function E(e){return w[e]??[]}function D(e){return T[e]??[]}var O=l(`<p class="text-[10px] text-[var(--text-secondary)] opacity-45 font-mono break-words"> </p>`),k=l(`<div class="diagram-body-status diagram-body-overlay svelte-1ua23jv"><p class="text-xs text-[var(--text-secondary)] opacity-70 font-mono lowercase">diagram could not be rendered — source below</p> <!></div>`),A=l(`<div class="diagram-body-status diagram-body-overlay svelte-1ua23jv"><span class="diagram-spinner svelte-1ua23jv" aria-hidden="true"></span> <span class="text-[10px] uppercase text-[var(--text-secondary)] opacity-50">decoding diagram</span></div>`),j=l(`<div class="diagram-toolbar svelte-1ua23jv"><span class="text-[9px] uppercase text-[var(--text-secondary)] opacity-45"> </span> <div class="flex gap-1.5"><button type="button" class="diagram-tool svelte-1ua23jv">[-]</button> <span class="diagram-zoom svelte-1ua23jv"> </span> <button type="button" class="diagram-tool svelte-1ua23jv">[+]</button> <button type="button" class="diagram-tool svelte-1ua23jv">fit</button></div></div>`),M=l(`<pre class="diagram-source svelte-1ua23jv"><code> </code></pre>`),ne=l(`<figure class="diagram-frame svelte-1ua23jv"><figcaption class="diagram-caption svelte-1ua23jv"><span class="text-[var(--text-secondary)] opacity-40"> </span> <span class="diagram-caption-text svelte-1ua23jv"> </span></figcaption> <div><div></div> <!></div> <!> <button type="button" class="diagram-source-toggle svelte-1ua23jv"> </button> <!></figure>`);function re(s,l){r(l,!0);let d=n(void 0),h=n(void 0),_=n(`idle`),y=n(``),w=n(!1),T=n(1),E=n(0),D=n(0),re=0,ie=.35,ae=e(()=>u(E)>900),oe=e(()=>Math.round(u(E)*u(T))),N=e(()=>Math.round(u(D)*u(T))),P=n(0),F=n(1);function se(e){return Math.min(4,Math.max(ie,Math.round(e*100)/100))}let I=e(()=>u(_)===`ok`&&(u(ae)||u(oe)>u(P)||u(N)>520)),ce=Math.random().toString(36).slice(2,9),L=null,R=!1;async function z(){try{if(await new Promise(e=>setTimeout(e,0)),L||=(await b(()=>import(`./mermaid.core-Dkj5CZGg.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))).default,R)return;S(_,`idle`);let e=document.documentElement.classList.contains(`light-mode`);L.initialize({startOnLoad:!1,securityLevel:`strict`,theme:`base`,fontFamily:`IBM Plex Mono, Courier, monospace`,themeVariables:e?{background:`#ffffff`,primaryColor:`#f4f4f4`,primaryTextColor:`#000000`,primaryBorderColor:`#000000`,lineColor:`#000000`,secondaryColor:`#ebebeb`,tertiaryColor:`#ffffff`,textColor:`#000000`,noteBkgColor:`#f4f4f4`,noteTextColor:`#000000`,noteBorderColor:`#000000`,actorBkg:`#ffffff`,actorBorder:`#000000`,actorTextColor:`#000000`,signalColor:`#000000`,signalTextColor:`#000000`,labelBoxBkgColor:`#f4f4f4`,labelTextColor:`#000000`,loopTextColor:`#000000`,activationBkgColor:`#e0e0e0`,activationBorderColor:`#000000`,sequenceNumberColor:`#ffffff`,attributeBackgroundColorOdd:`#ffffff`,attributeBackgroundColorEven:`#f4f4f4`}:{background:`#0a0a0a`,primaryColor:`#141414`,primaryTextColor:`#ffffff`,primaryBorderColor:`#ffffff`,lineColor:`#cccccc`,secondaryColor:`#1c1c1c`,tertiaryColor:`#0a0a0a`,textColor:`#ffffff`,noteBkgColor:`#141414`,noteTextColor:`#ffffff`,noteBorderColor:`#ffffff`,actorBkg:`#0a0a0a`,actorBorder:`#ffffff`,actorTextColor:`#ffffff`,signalColor:`#ffffff`,signalTextColor:`#ffffff`,labelBoxBkgColor:`#141414`,labelTextColor:`#ffffff`,loopTextColor:`#ffffff`,activationBkgColor:`#1c1c1c`,activationBorderColor:`#ffffff`,sequenceNumberColor:`#000000`,attributeBackgroundColorOdd:`#0a0a0a`,attributeBackgroundColorEven:`#141414`}}),re+=1;let{svg:t}=await L.render(`mmd-${ce}-${l.index}-${re}`,l.diagram.code);if(R)return;if(!u(d)){S(_,`error`),S(y,`render target missing`);return}u(d).innerHTML=t;let n=u(d).querySelector(`svg`);if(n){n.removeAttribute(`width`),n.removeAttribute(`height`);let e=n.getAttribute(`viewBox`);if(e){let t=e.split(/\s+/).map(Number);Number.isFinite(t[2])&&t[2]>0&&S(E,Math.round(t[2]),!0),Number.isFinite(t[3])&&t[3]>0&&S(D,Math.round(t[3]),!0)}n.style.maxWidth=`none`;let t=u(d).parentElement;if(t){let e=getComputedStyle(t),n=t.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight);if(n>0&&u(E)>n){let e=n/u(E);S(F,Math.max(ie,Math.floor(e*20)/20),!0)}else S(F,1);S(T,u(F),!0)}}S(_,`ok`)}catch(e){console.error(`mermaid render failed`,e),S(y,e instanceof Error?`${e.name}: ${e.message}`:String(e),!0),S(_,`error`)}}v(()=>{z();let e=document.documentElement,t=new MutationObserver(()=>{u(_)===`ok`&&z()});t.observe(e,{attributes:!0,attributeFilter:[`class`]}),ee(()=>{if(u(_)!==`ok`||!u(d))return;let e=u(d).querySelector(`svg`);!e||!u(E)||!u(D)||(e.style.width=`${u(oe)}px`,e.style.height=`${u(N)}px`)});let n;return u(h)&&(S(P,u(h).clientWidth,!0),n=new ResizeObserver(()=>{S(P,u(h)?u(h).clientWidth:0,!0)}),n.observe(u(h))),()=>{R=!0,t.disconnect(),n?.disconnect()}});var B=ne(),V=C(B),H=C(V),U=C(H);t(H);var W=o(H,2),G=C(W,!0);t(W),t(V);var K=o(V,2);let q;var J=C(K);let Y;f(J,e=>S(d,e),()=>u(d));var le=o(J,2),ue=e=>{var n=k(),r=o(C(n),2),a=e=>{var n=O(),r=C(n,!0);t(n),i(()=>x(r,u(y))),c(e,n)};p(r,e=>{u(y)&&e(a)}),t(n),c(e,n)},de=e=>{c(e,A())};p(le,e=>{u(_)===`error`?e(ue):u(_)!==`ok`&&e(de,1)}),t(K),f(K,e=>S(h,e),()=>u(h));var X=o(K,2),Z=e=>{var n=j(),r=C(n),a=C(r,!0);t(r);var s=o(r,2),l=C(s),d=o(l,2),f=C(d);t(d);var p=o(d,2),h=o(p,2);t(s),t(n),i(e=>{x(a,u(ae)?`scroll to pan`:`fit to width`),x(f,`${e??``}%`)},[()=>Math.round(u(T)*100)]),m(`click`,l,()=>S(T,se(u(T)/1.25),!0)),m(`click`,p,()=>S(T,se(u(T)*1.25),!0)),m(`click`,h,()=>S(T,u(F),!0)),c(e,n)};p(X,e=>{u(_)===`ok`&&e(Z)});var Q=o(X,2),fe=C(Q,!0);t(Q);var $=o(Q,2),pe=e=>{var n=M(),r=C(n),a=C(r,!0);t(r),t(n),i(()=>x(a,l.diagram.code)),c(e,n)};p($,e=>{u(w)&&e(pe)}),t(B),i(e=>{x(U,`[FIG ${e??``}]`),x(G,l.diagram.caption),q=g(K,1,`diagram-body svelte-1ua23jv`,null,q,{"diagram-body-scroll":u(I)}),Y=g(J,1,`diagram-canvas svelte-1ua23jv`,null,Y,{"diagram-canvas-pending":u(_)!==`ok`}),a(Q,`aria-expanded`,u(w)),x(fe,u(w)?`[-] hide mermaid source`:`[+] view mermaid source`)},[()=>String(l.index+1).padStart(2,`0`)]),m(`click`,Q,()=>S(w,!u(w))),c(s,B),te()}_([`click`]);var ie=l(`<span class="border border-[var(--border-muted)] px-2 py-0.5 text-[9px] text-[var(--text-secondary)] opacity-50"> </span>`),ae=l(`<li class="flex gap-3 text-xs leading-relaxed text-[var(--text-secondary)] opacity-75 font-mono lowercase"><span class="text-[var(--text-primary)] opacity-50 shrink-0">&gt;</span> <span> </span></li>`),oe=l(`<div class="border border-[var(--border-muted)] p-3 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 hover:border-[var(--border-primary)] transition-all duration-300"><span class="text-[var(--text-secondary)] opacity-60 text-[10px] uppercase shrink-0 sm:w-40"> </span> <span class="text-xs font-mono lowercase break-words sm:text-right sm:flex-1"> </span></div>`),N=l(`<figure class="shot svelte-1yt4zsb"><img loading="lazy" decoding="async" class="svelte-1yt4zsb"/> <figcaption class="shot-caption svelte-1yt4zsb"> </figcaption></figure>`),P=l(`<section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[ANIM]</span> <h2 class="text-sm font-bold uppercase tracking-wider">MOTION PREVIEW</h2></div> <div class="grid gap-3"></div></section>`),F=l(`<section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-4"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[DIAGRAM]</span> <h2 class="text-sm font-bold uppercase tracking-wider">ARCHITECTURE DIAGRAMS <span class="text-[var(--text-secondary)] opacity-40 font-normal normal-case"> </span></h2></div> <p class="text-[10px] text-[var(--text-secondary)] opacity-50 font-mono lowercase">rendered from this project's own readme, with the original mermaid source available on every diagram.</p> <div class="space-y-4"></div></section>`),se=l(`<div class="w-full max-w-4xl mx-auto space-y-6"><button class="terminal-border-single px-4 py-2 text-xs bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 uppercase">&lt;- RETURN TO LEDGER</button> <header class="terminal-border-double p-5 md:p-8 bg-[var(--bg-surface)]/95 space-y-4"><div class="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 gap-4"><span class="text-[9px] text-[var(--text-secondary)] opacity-40 uppercase tracking-wider break-words"> </span> <span class="text-xs text-[var(--text-secondary)] opacity-40"> </span></div> <h1 class="text-2xl md:text-4xl font-bold uppercase tracking-tight text-glow break-words"> </h1> <p class="text-xs leading-relaxed text-[var(--text-secondary)] opacity-75 font-mono lowercase"> </p> <div class="flex flex-wrap gap-1.5 pt-1"></div></header> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[BRIEF]</span> <h2 class="text-sm font-bold uppercase tracking-wider">OVERVIEW</h2></div> <p class="text-xs leading-relaxed text-[var(--text-secondary)] opacity-75 font-mono lowercase"> </p></section> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[CAPS]</span> <h2 class="text-sm font-bold uppercase tracking-wider">CAPABILITIES</h2></div> <ul class="space-y-2"></ul></section> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[ARCH]</span> <h2 class="text-sm font-bold uppercase tracking-wider">ARCHITECTURE</h2></div> <div class="space-y-2"></div></section> <!> <!> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[REPO]</span> <h2 class="text-sm font-bold uppercase tracking-wider">REPOSITORY STATUS</h2></div> <div><span> </span> <a target="_blank" rel="noopener noreferrer" class="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors break-words"> </a></div> <p class="text-[10px] leading-relaxed text-[var(--text-secondary)] opacity-60 font-mono lowercase"> </p></section> <div class="flex flex-col sm:flex-row gap-3 pt-1"><button class="inline-flex w-full sm:w-auto justify-center items-center gap-2 terminal-border-single px-5 py-2.5 text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] transition hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] hover:scale-[1.03] duration-300">&lt;- BACK TO ALL PROJECTS</button> <a target="_blank" rel="noopener noreferrer" class="inline-flex w-full sm:w-auto justify-center items-center gap-2 terminal-border-single px-5 py-2.5 text-xs font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:scale-[1.03] transition-all duration-300">OPEN SOURCE PORTAL -&gt;</a></div></div>`);function I(l,f){r(f,!0);let _=n(``),v=n(!1),b=e(()=>E(f.project.slug)),w=e(()=>D(f.project.slug));ee(()=>{S(_,f.project.title,!0),S(v,!1)});function T(){u(v)||(S(v,!0),h(f.project.title,e=>{S(_,e,!0)}))}var O=se(),k=C(O),A=o(k,2),j=C(A),M=C(j),ne=C(M,!0);t(M);var I=o(M,2),ce=C(I);t(I),t(j);var L=o(j,2),R=C(L,!0);t(L);var z=o(L,2),B=C(z,!0);t(z);var V=o(z,2);y(V,21,()=>f.project.tags,s,(e,n)=>{var r=ie(),a=C(r,!0);t(r),i(()=>x(a,u(n))),c(e,r)}),t(V),t(A);var H=o(A,2),U=o(C(H),2),W=C(U,!0);t(U),t(H);var G=o(H,2),K=o(C(G),2);y(K,21,()=>f.project.capabilities,s,(e,n)=>{var r=ae(),a=o(C(r),2),s=C(a,!0);t(a),t(r),i(()=>x(s,u(n))),c(e,r)}),t(K),t(G);var q=o(G,2),J=o(C(q),2);y(J,21,()=>f.project.architecture,s,(e,n)=>{var r=oe(),a=C(r),s=C(a);t(a);var l=o(a,2),d=C(l,!0);t(l),t(r),i(()=>{x(s,`${u(n).label??``}:`),x(d,u(n).value)}),c(e,r)}),t(J),t(q);var Y=o(q,2),le=e=>{var n=P(),r=o(C(n),2);y(r,21,()=>u(w),s,(e,n)=>{var r=N(),s=C(r),l=o(s,2),d=C(l,!0);t(l),t(r),i(()=>{a(s,`src`,u(n).src),a(s,`alt`,u(n).alt),x(d,u(n).alt)}),c(e,r)}),t(r),t(n),c(e,n)};p(Y,e=>{u(w).length>0&&e(le)});var ue=o(Y,2),de=e=>{var n=F(),r=C(n),a=o(C(r),2),l=o(C(a)),d=C(l);t(l),t(a),t(r);var f=o(r,4);y(f,21,()=>u(b),s,(e,t,n)=>{re(e,{get diagram(){return u(t)},index:n})}),t(f),t(n),i(()=>x(d,`(${u(b).length??``})`)),c(e,n)};p(ue,e=>{u(b).length>0&&e(de)});var X=o(ue,2),Z=o(C(X),2),Q=C(Z),fe=C(Q,!0);t(Q);var $=o(Q,2),pe=C($);t($),t(Z);var me=o(Z,2),he=C(me,!0);t(me),t(X);var ge=o(X,2),_e=C(ge),ve=o(_e,2);t(ge),t(O),i((e,t)=>{x(ne,f.project.type),x(ce,`DOSSIER // ${e??``}`),x(R,u(_)),x(B,f.project.description),x(W,f.project.overview),g(Z,1,`border p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all duration-300
        ${f.project.repo.public?`border-[var(--border-primary)]`:`border-[var(--border-muted)]`}`),g(Q,1,`text-[10px] uppercase ${f.project.repo.public?`text-[var(--text-primary)]`:`text-[var(--text-secondary)] opacity-50`}`),x(fe,f.project.repo.public?`[PUBLIC] SOURCE AVAILABLE`:`[PRIVATE] NOT PUBLISHED`),a($,`href`,f.project.repo.url),x(pe,`ROUTING: // ${t??``} ->`),x(he,f.project.repo.note),a(ve,`href`,f.project.link)},[()=>f.project.slug.toUpperCase(),()=>f.project.repo.url.replace(`https://`,``)]),m(`click`,k,function(...e){f.onback?.apply(this,e)}),d(`mouseenter`,L,T),d(`mouseleave`,L,()=>S(_,f.project.title,!0)),m(`click`,_e,function(...e){f.onback?.apply(this,e)}),c(l,O),te()}_([`click`]);export{I as default};