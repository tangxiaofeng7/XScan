export type Systeminfo = {
  goos: string;
  numCpu: number;
  compiler: string;
  goVersion: string;
  numGoroutine: number;
  cpus: number[];
  cores: number;
  usedMb: number;
  totalMb: number;
  usedPercent: number;
  usedMb: number;
  usedGb: number;
  totalMb: number;
  totalGb: number;
  usedPercent: number;
  os: Os;
  cpu: Cpu;
  ram: Ram;
  disk: Disk;
};

export interface RootObject {
  code: number;
  data: Data;
  msg: string;
}
