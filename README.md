# go2flow_test

Integration test for go2flow.  To run:

    go get -u github.com/shutej/go2flow_test/...
    godep go install github.com/shutej/go2flow_test/...
    go2flow-integration --listen=:8080

Now, go to [127.0.0.1:8080](127.0.0.1:8080) and open the console.

If developing further tests, you can update the Javascript:

    npm install -g babel-cli flow-bin
    npm install
    go generate github.com/shutej/go2flow_test/...
