import * as vscode from 'vscode';

export class XelDocumentContextProvider implements vscode.TextDocumentContentProvider {

	public constructor(private _context: vscode.ExtensionContext) { }

	public provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<string> {
		return '<html><body><div>val</div><body></html>'
	}
}
